import React from 'react';
import Link from 'next/link';
import { getPost, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const title = post.title;
  const publishedAt = post.publishedAt;
  const authorName = post.authorName;
  const excerpt = post.excerpt;

  const imageSrc = post.mainImage
    ? urlFor(post.mainImage).width(1200).url()
    : null;

  const authorAvatar = post.authorImage
    ? urlFor(post.authorImage).width(100).url()
    : null;

  return (
    <main>
      <header className="post-header" data-scroll-section>
        <div className="container">
          <div className="post-meta">
            {publishedAt ? formatDate(publishedAt) : ''}
          </div>
          <h1 className="post-title shimmer-text">{title}</h1>
          <div className="post-author-wrap">
            {authorAvatar ? (
              <div 
                className="post-author-img" 
                style={{ backgroundImage: `url('${authorAvatar}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            ) : (
              <div 
                className="post-author-img" 
                style={{ 
                  background: 'var(--accent)', 
                  color: '#000', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  borderRadius: '50%'
                }}
              >
                {(authorName || 'W').charAt(0).toUpperCase()}
              </div>
            )}
            <div className="post-author-info">
              <h4>{authorName || 'WebItUp Writer'}</h4>
              <span>Contributor</span>
            </div>
          </div>
        </div>
      </header>

      {imageSrc && (
        <div className="post-hero-image-wrap" data-scroll-section>
          <div 
            className="post-hero-image" 
            style={{ backgroundImage: `url('${imageSrc}')` }}
            data-scroll
            data-scroll-speed="-1"
          />
        </div>
      )}

      <section className="post-body-section" data-scroll-section>
        <div className="post-body-container">
          <div className="post-content">
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>{excerpt || 'No content available for this post.'}</p>
            )}
          </div>
          <div style={{ marginTop: '5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem' }}>
            <Link href="/blog" className="btn btn-outline magnetic-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" style={{ transform: 'rotate(180deg)' }}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span>Back to Journal</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

