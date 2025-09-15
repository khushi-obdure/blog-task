#  Blog API Backend

This is a **Node.js + Express** backend that provides APIs to fetch blogs from a third-party source, supports **search**, and provides **pagination** for listing blogs.  

---

##  Features
- **Fetch all blogs** with pagination  
- **Search blogs** by keyword  
- Uses **TypeScript** for type-safety  
- Follows a modular code structure (`controllers`, `services`, `interfaces`)  
- Provides standardized API responses  

---

##  Tech Stack
- **Node.js** (Runtime)  
- **Express.js** (Web Framework)  
- **TypeScript** (Static Typing)  
- **HTTPS module** (to call external API)  
- **Dotenv** (Environment variable management)  

---

##  Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd backend

2. Install Dependencies
npm install

3. Configure Environment Variables
PORT=5000
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=your_rapidapi_host_here

4. Run in Development Mode
npm run dev
```

---


## API Endpoints

### Get painated data
GET http://localhost:5000?page=1&limit=10

### To Search the blogs 
GET http://localhost:5000/search?keyword=controversy


### Example Response

{
    "errorCode": null,
    "status": 200,
    "message": "Blogs fetched successfully.",
    "success": true,
    "data": [
        {
            "timestamp": "1757927015000",
            "title": "Why is Sam Altman losing sleep? OpenAI CEO addresses controversies in sweeping interview",
            "snippet": "OpenAI CEO Sam Altman addressed a plethora of moral and ethical questions regarding his company and its AI chatbot in a sweeping interview...",
            "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUdka1p1WkdrMWVrVXdSazUwVFJDZkF4ampCU2dLTWdtbFlJUU1waWNtMVFB=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://img.devisty.store/newsimage/CC8iL0NnNUdka1p1WkdrMWVrVXdSazUwVFJDZkF4ampCU2dLTWdtbFlJUU1waWNtMVFB"
            },
            "newsUrl": "https://www.cnbc.com/2025/09/15/sam-altman-losing-sleep-open-ai-ceo-addresses-controversies-interview.html",
            "publisher": "CNBC"
        },
    ]
}
