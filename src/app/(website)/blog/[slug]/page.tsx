import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getPost, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found — Web It Up 24',
    };
  }

  const imageSrc = post.mainImage ? urlFor(post.mainImage).width(1200).url() : undefined;

  return {
    title: `${post.title} — Web It Up 24 Journal`,
    description: post.excerpt || 'Read this article on the Web It Up 24 journal.',
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.authorName ? [post.authorName] : undefined,
      images: imageSrc ? [{ url: imageSrc }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: imageSrc ? [imageSrc] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const imageSrc = post.mainImage ? urlFor(post.mainImage).width(1200).url() : null;
  const authorAvatar = post.authorImage ? urlFor(post.authorImage).width(100).url() : null;

  return (
    <main>
      <article className="article-page" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container-narrow">
          <div style={{ marginBottom: '2.5rem' }}>
            <Link href="/blog" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.45rem 1rem' }}>
              <FiArrowLeft aria-hidden="true" />
              <span>Back to Journal</span>
            </Link>
          </div>

          <header style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              {formatDate(post.publishedAt)}
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              {post.title}
            </h1>

            {/* Author info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-subtle)' }}>
              {authorAvatar ? (
                <div
                  style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundImage: `url('${authorAvatar}')`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border)' }}
                />
              ) : (
                <div
                  style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}
                >
                  W
                </div>
              )}
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>{post.authorName || 'Web It Up 24'}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>Author &middot; Web It Up 24 Studio</div>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {imageSrc && (
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border)', marginBottom: '3.5rem', boxShadow: 'var(--shadow-card)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageSrc} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}

          {/* Article Body */}
          <div className="article-body" style={{ fontSize: '1.08rem', lineHeight: '1.8', color: 'var(--text)' }}>
            {post.body ? (
              <PortableText value={post.body} />
            ) : (
              <p>{post.excerpt || 'No content provided for this article.'}</p>
            )}
          </div>

          <div style={{ marginTop: '4.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/blog" className="btn btn-outline">
              <FiArrowLeft aria-hidden="true" />
              <span>Back to all articles</span>
            </Link>
            <Link href="/contact" className="btn btn-primary">
              <span>Start a project inquiry</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
