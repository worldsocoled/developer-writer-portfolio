// Portfolio data - replace with your actual articles
const portfolioItems = [
    {
        title: "The Ethics of Generative AI",
        description: "Examining moral implications of GPT-4 and DALL-E in creative industries with real-world case studies.",
        tags: ["ai", "tech"],
        category: "ai",
        date: "May 2023",
        link: "ethics-of-generative-ai.html"
    },
    {
        title: "CSS Architecture for Scalable Projects",
        description: "Advanced methodologies for maintainable styling systems in enterprise applications.",
        tags: ["web", "tech"],
        category: "web",
        date: "Apr 2023",
        link: "css-architecture.html"
    },
    {
        title: "Pediatric Teletherapy UX Best Practices",
        description: "Designing compassionate digital experiences for child mental health platforms.",
        tags: ["health", "ux"],
        category: "health",
        date: "Mar 2023",
        link: "pediatric-teletherapy-ux.html"
    },
    {
        title: "Narrative Design in Indie RPGs",
        description: "How small studios craft compelling stories with limited resources.",
        tags: ["gaming", "storytelling"],
        category: "gaming",
        date: "Feb 2023",
        link: "narrative-design-indie-rpgs.html"
    },
    {
        title: "API Documentation That Developers Love",
        description: "Patterns for creating intuitive technical guides with interactive examples.",
        tags: ["tech", "web"],
        category: "tech",
        date: "Jan 2023",
        link: "api-documentation.html"
    },
    {
        title: "The Future of AI-Assisted Coding",
        description: "How GitHub Copilot is changing developer workflows and skill requirements.",
        tags: ["ai", "web", "tech"],
        category: "ai",
        date: "Dec 2022",
        link: "ai-assisted-coding.html"
    }
];

// Initialize after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.getElementById('portfolio-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render portfolio items
    function renderPortfolio(filter = 'all') {
        portfolioContainer.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filter);
        
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            // Generate tags HTML
            const tagsHTML = item.tags.map(tag => 
                `<span class="tag ${tag}">${tag}</span>`
            ).join('');
            
            portfolioItem.innerHTML = `
                <div class="item-image">📝</div>
                <div class="item-content">
                    <div class="item-tags">${tagsHTML}</div>
                    <h3>${item.title}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-meta">
                        <span>${item.date}</span>
                        <a href="${item.link}" class="item-link">Read Article</a>
                    </div>
                </div>
            `;
            
            portfolioContainer.appendChild(portfolioItem);
        });
    }

    // Add filter event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderPortfolio(button.dataset.filter);
        });
    });

    // Initial render
    renderPortfolio();
});