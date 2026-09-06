'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, Post, urlFor } from '@/lib/sanity';

export default function BlogList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts || []);
      } catch (error) {
        console.error("Failed to load posts from Sanity:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="blog-section" data-scroll-section>
      <div className="container">
        <div className="section-header">
          <span className="section-label reveal-up">THE JOURNAL</span>
          <h2 className="section-title reveal-up">Dispatches on Design,<br /><em>Architecture & Commerce.</em></h2>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            <p className="loading-text" style={{ fontSize: '1.2rem' }}>Fetching thoughts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>No posts found in Sanity CMS.</p>
            <Link href="/studio" className="btn btn-outline">
              <span>Go to Studio & Create Post</span>
            </Link>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, index) => {
              const imageSrc = post.mainImage 
                ? urlFor(post.mainImage).width(800).url() 
                : null;
              
              const avatarSrc = post.authorImage
                ? urlFor(post.authorImage).width(100).url()
                : null;

              const author = post.authorName || 'WebItUp Writer';

              return (
                <article key={post._id} className="blog-card" data-scroll data-scroll-speed={(index % 2 === 0 ? 0.3 : 0.5).toString()}>
                  <Link href={`/blog/${post.slug.current}`} className="blog-card-img-wrap">
                    {imageSrc ? (
                      <div 
                        className="blog-card-img" 
                        style={{ backgroundImage: `url('${imageSrc}')` }}
                      />
                    ) : (
                      <div 
                        className="blog-card-img" 
                        style={{ 
                          background: 'linear-gradient(135deg, #141414 0%, #d4af37 100%)', 
                          opacity: 0.85 
                        }}
                      />
                    )}
                  </Link>
                  <div className="blog-card-content">
                    <span className="blog-card-meta">{formatDate(post.publishedAt)}</span>
                    <Link href={`/blog/${post.slug.current}`}>
                      <h3>{post.title}</h3>
                    </Link>
                    <p className="blog-card-excerpt">{post.excerpt || 'Read the full article to discover insights.'}</p>
                    <div className="blog-card-footer">
                      {avatarSrc ? (
                        <div 
                          className="blog-author-avatar" 
                          style={{ backgroundImage: `url('${avatarSrc}')` }}
                        />
                      ) : (
                        <div 
                          className="blog-author-avatar" 
                          style={{ 
                            background: 'var(--accent)', 
                            color: '#000', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            fontWeight: 'bold',
                            fontSize: '0.9rem'
                          }}
                        >
                          {author.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="blog-author-name">{author}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

