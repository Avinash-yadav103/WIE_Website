'use client'

import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import './NewsletterGrid.css'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const newsletters = [
  {
    id: 1,
    title: 'January 2024 Newsletter',
    description: 'Monthly updates and news from January 2024',
    date: '2024-01-01',
    pdfUrl: '/sample.pdf',
    thumbnail: '/placeholder.svg?height=400&width=300'
  },
  {
    id: 2,
    title: 'February 2024 Newsletter',
    description: 'Monthly updates and news from February 2024',
    date: '2024-02-01',
    pdfUrl: '/sample.pdf',
    thumbnail: '/placeholder.svg?height=400&width=300'
  },
  {
    id: 3,
    title: 'March 2024 Newsletter',
    description: 'Monthly updates and news from March 2024',
    date: '2024-03-01',
    pdfUrl: '/sample.pdf',
    thumbnail: '/placeholder.svg?height=400&width=300'
  }
]

const NewsletterCard = ({ title, description, date, pdfUrl, thumbnail }) => {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="newsletter-card">
      <div className="card-header">
        <h2>{title}</h2>
        <p className="date">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="card-content">
        <div className="thumbnail-container">
          <img src={thumbnail} alt={title} className="thumbnail" />
        </div>
        <p className="description">{description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-outline" onClick={() => setShowPreview(true)}>
          Preview
        </button>
        <a href={pdfUrl} download className="btn btn-primary">
          Download
        </a>
      </div>
      {showPreview && (
        <div className="modal" onClick={() => setShowPreview(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <div className="pdf-container">
              <Document
                file={pdfUrl}
                loading={<div className="loading">Loading PDF...</div>}
              >
                <Page pageNumber={1} />
              </Document>
            </div>
            <button className="btn btn-close" onClick={() => setShowPreview(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

const Newsletter = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNewsletters = newsletters.filter(newsletter =>
    newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    newsletter.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="newsletter-container">
      <div className="search-container">
        <h1>Our Newsletters</h1>
        <input
          type="search"
          placeholder="Search newsletters..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="newsletter-grid">
        {filteredNewsletters.map(newsletter => (
          <NewsletterCard key={newsletter.id} {...newsletter} />
        ))}
      </div>

      {filteredNewsletters.length === 0 && (
        <div className="no-results">
          No newsletters found matching your search.
        </div>
      )}
    </div>
  )
}

export default Newsletter

