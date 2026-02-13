# 📄 Document Analysis Tool

An AI-powered web application built with Next.js that analyzes insurance application forms, extracts questions, translates them, clusters similar questions, and provides comprehensive analytics.

## ✨ Features

- **Multi-Format Support**: Upload PDF, HTML, Markdown, and TXT files
- **AI Question Extraction**: GPT-4 powered question extraction from documents
- **Translation**: Automatic translation to English for cross-language comparison
- **Clustering**: Group similar questions using embeddings and K-means
- **Analytics**:
  - Common questions across companies
  - Company-specific questions
  - Category breakdown (Driver, Vehicle, Parking, Claims, Payment, Consent)
  - Market comparison (Spain vs Germany)
  - Cost estimation
- **Export**: Download results as JSON or formatted HTML report

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation & Setup

1. **Configure environment**:
```bash
# Edit .env.local and add your OpenAI API key
# OPENAI_API_KEY=sk-proj-your-key-here
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 📖 Usage

1. **Upload Documents**: Drag and drop PDF/HTML/MD/TXT files
2. **Enter Company Names**: Fill in company name for each file
3. **Select Market** (optional): Choose Spain or Germany for market comparison
4. **Analyze**: Click "Analyze Documents" and watch the AI process your files
5. **Explore Results**: View common questions, clusters, categories, and more
6. **Export**: Download JSON or HTML report

## 💰 Cost Estimation

Typical costs using OpenAI API:
- GPT-4: ~$0.03/1K input tokens, $0.06/1K output tokens
- Embeddings: ~$0.02/1M tokens
- **Average per document**: $0.50-$2.00

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **UI**: shadcn/ui + Tailwind CSS
- **AI**: OpenAI GPT-4 + text-embedding-3-small
- **Parsing**: pdf-parse, cheerio, marked
- **Clustering**: ml-kmeans
- **State**: Zustand

## 🛠️ Development

```bash
# Run dev server
npm run dev

# Build for production
npm run build
npm start

# Lint
npm run lint
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add `OPENAI_API_KEY` environment variable
4. Deploy!

## ⚠️ Troubleshooting

**PDF parsing fails**: Ensure PDF contains actual text (not scanned images)
**OpenAI errors**: Verify API key is valid and has credits
**Clustering fails**: Upload at least 2-3 documents
**Large file issues**: Adjust `NEXT_PUBLIC_MAX_FILE_SIZE` in `.env.local`

## 📝 License

MIT
