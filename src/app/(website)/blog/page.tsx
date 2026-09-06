import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, Post, urlFor } from '@/lib/sanity';
import { FiArrowRight } from 'react-icons/fi';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Journal — Web It Up 24 | Design, Engineering & Growth Notes',
  description: 'Articles, architectural breakdowns, and practical insights on web engineering, design systems, and startup growth.',
  alternates: {
    canonical: '/blog',
  },
};

export default async function BlogIndexPage() {
  const posts: Post[] = await getPosts().catch(() => []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <main>
      <header className="page-header">
        <div className="container">
          <span className="section-label">The Journal</span>
          <h1>Insights on design, code, and growth</h1>
          <p>
            Field notes, technical breakdowns, and strategic guides on building modern digital products.
          </p>
        </div>
      </header>

      <section className="blog-section">
        <div className="container">
          {posts.length === 0 ? (
            <div className="blog-empty-state">
              <p>New ideas are on the way. Check back soon.</p>
              <Link href="/contact" className="btn btn-outline">
                <span>Start a project conversation</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div style={{ marginBottom: '3.5rem' }}>
                  <article className="blog-card" style={{ gridColumn: '1 / -1' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0' }} className="featured-blog-row">
                      <Link
                        href={`/blog/${featuredPost.slug.current}`}
                        className="blog-card-img-wrap"
                        style={{ aspectRatio: '16 / 10', minHeight: '280px' }}
                        aria-label={`Read featured post: ${featuredPost.title}`}
                      >
                        {featuredPost.mainImage ? (
                          <div
                            className="blog-card-img"
                            style={{ backgroundImage: `url('${urlFor(featuredPost.mainImage).width(1000).url()}')` }}
                          />
                        ) : (
                          <div
                            className="blog-card-img"
                            style={{ backgroundColor: 'var(--surface-muted)' }}
                          />
                        )}
                      </Link>

                      <div className="blog-card-content" style={{ padding: '2.5rem', justifyContent: 'center' }}>
                        <span className="blog-card-meta">
                          Featured Article &middot; {formatDate(featuredPost.publishedAt)}
                        </span>
                        <Link href={`/blog/${featuredPost.slug.current}`}>
                          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
                            {featuredPost.title}
                          </h2>
                        </Link>
                        <p className="blog-card-excerpt" style={{ fontSize: '1rem' }}>
                          {featuredPost.excerpt || 'Read the full guide for technical architecture and design lessons.'}
                        </p>
                        <div className="blog-card-footer" style={{ marginTop: '1rem' }}>
                          {featuredPost.authorImage ? (
                            <div
                              className="blog-author-avatar"
                              style={{ backgroundImage: `url('${urlFor(featuredPost.authorImage).width(80).url()}')` }}
                            />
                          ) : (
                            <div
                              className="blog-author-avatar"
                              style={{ backgroundColor: 'var(--accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}
                            >
                              W
                            </div>
                          )}
                          <span className="blog-author-name">{featuredPost.authorName || 'Web It Up 24'}</span>
                          <span style={{ marginLeft: 'auto', color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem' }}>
                            Read article &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              )}

              {/* Grid of Remaining Posts */}
              {remainingPosts.length > 0 && (
                <div className="blog-grid">
                  {remainingPosts.map((post) => {
                    const imageSrc = post.mainImage ? urlFor(post.mainImage).width(700).url() : null;
                    const avatarSrc = post.authorImage ? urlFor(post.authorImage).width(80).url() : null;

                    return (
                      <article key={post._id} className="blog-card">
                        <Link href={`/blog/${post.slug.current}`} className="blog-card-img-wrap" aria-label={`Read article: ${post.title}`}>
                          {imageSrc ? (
                            <div
                              className="blog-card-img"
                              style={{ backgroundImage: `url('${imageSrc}')` }}
                            />
                          ) : (
                            <div
                              className="blog-card-img"
                              style={{ backgroundColor: 'var(--surface-muted)' }}
                            />
                          )}
                        </Link>
                        <div className="blog-card-content">
                          <span className="blog-card-meta">{formatDate(post.publishedAt)}</span>
                          <Link href={`/blog/${post.slug.current}`}>
                            <h3>{post.title}</h3>
                          </Link>
                          <p className="blog-card-excerpt">
                            {post.excerpt || 'Read the complete article for technical takeaways and strategic insights.'}
                          </p>
                          <div className="blog-card-footer">
                            {avatarSrc ? (
                              <div
                                className="blog-author-avatar"
                                style={{ backgroundImage: `url('${avatarSrc}')` }}
                              />
                            ) : (
                              <div
                                className="blog-author-avatar"
                                style={{ backgroundColor: 'var(--accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem' }}
                              >
                                W
                              </div>
                            )}
                            <span className="blog-author-name">{post.authorName || 'Web It Up 24'}</span>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-panel">
            <h2 className="cta-title">Have a project or challenge in mind?</h2>
            <p className="cta-desc">
              We collaborate with founders and teams to bring high-impact websites to life. Tell us what you are building.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-large">
                <span>Start a project</span>
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
