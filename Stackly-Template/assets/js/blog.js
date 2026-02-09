const blogData = {
    'osha-violations-2025': {
        title: "Top 5 OSHA Violations in 2025",
        category: "Compliance",
        date: "Oct 24, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>As we move into 2025, OSHA has released its preliminary data for the most frequent workplace safety violations. Understanding these common pitfalls is the first step toward maintaining a compliant and safe work environment for your team.</p>
            
            <h3>1. Fall Protection (Construction)</h3>
            <p>For the 14th consecutive year, fall protection remains the most cited violation. Most citations occur on residential construction jobsites where employees are working at heights without proper harnesses or guardrails.</p>

            <h3>2. Hazard Communication</h3>
            <p>Many businesses fail to maintain a proper inventory of hazardous chemicals or neglect to provide safety data sheets (SDS) and training to their employees.</p>

            <h3>3. Respiratory Protection</h3>
            <p>With increasing awareness of industrial dust and chemical fumes, OSHA is cracking down on improper respirator usage and fit-testing procedures.</p>

            <h3>4. Ladders</h3>
            <p>Improper use of ladders, using damaged ladders, and failing to secure them properly contribute to thousands of injuries every year.</p>

            <h3>5. Scaffolding</h3>
            <p>Scaffolding violations often involve missing base plates, lack of guardrails, or overloading platforms beyond their capacity.</p>
        `
    },
    'micro-learning-future': {
        title: "Why Micro-Learning is the Future of Safety",
        category: "Training",
        date: "Oct 15, 2025",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>Traditional 8-hour safety seminars are becoming a thing of the past. Modern industrial workforces require more flexible, engaging, and memory-retentive training methods. Enter micro-learning.</p>
            
            <p>Micro-learning breaks down complex safety procedures into 5-10 minute modules that can be completed on a tablet or smartphone during a break or before a shift begins.</p>

            <h3>Benefits of Micro-Learning:</h3>
            <ul>
                <li><strong>Better Retention:</strong> Short bursts of information are easier for the brain to process and remember.</li>
                <li><strong>Reduced Downtime:</strong> Employees don't need to be off the floor for an entire day.</li>
                <li><strong>Just-in-Time Learning:</strong> Workers can review a module exactly when they need to perform a specific task.</li>
            </ul>
        `
    },
    'ppe-checklist-electrical': {
        title: "PPE Checklist for Electrical Work",
        category: "Equipment",
        date: "Sep 28, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>Electrical hazards are among the most dangerous in the industrial sector. Having the right Personal Protective Equipment (PPE) isn't just a recommendation—it's a life-saving necessity.</p>
            
            <h3>Essential Electrical PPE:</h3>
            <ul>
                <li><strong>Insulated Gloves:</strong> Must be tested regularly for punctures and air-tightness.</li>
                <li><strong>Arc Flash Face Shield:</strong> Rated for the specific energy level of the equipment being serviced.</li>
                <li><strong>Flame-Resistant (FR) Clothing:</strong> Prevents second and third-degree burns in the event of an arc flash.</li>
                <li><strong>Non-Conductive Footwear:</strong> Specially designed boots to provide an extra layer of protection against grounding.</li>
            </ul>
        `
    },
    'safety-first-culture': {
        title: "Building a Safety-First Culture",
        category: "Culture",
        date: "Sep 12, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>Safety is not a department; it's a mindset. A true safety-first culture starts at the top and permeates every level of the organization.</p>
            
            <p>When leadership prioritizes safety over production speed, workers feel empowered to speak up about hazards without fear of retribution.</p>
        `
    },
    'evacuation-drill-practices': {
        title: "Evacuation Drill Best Practices",
        category: "Emergency",
        date: "Aug 30, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>An emergency evacuation should never be the first time your employees think about how to exit the building. Regular drills are essential for creating muscle memory and identifying bottlenecks in your exit routes.</p>
            
            <h3>Key Components of a Successful Drill:</h3>
            <ul>
                <li><strong>Clear Alarm Signals:</strong> Ensure every employee recognizes the distinctive sound of an evacuation alarm.</li>
                <li><strong>Designated Assembly Points:</strong> People need to know exactly where to meet outside for a head count.</li>
                <li><strong>Exit Route Visibility:</strong> Glow-in-the-dark strips and clear signage can save lives in smoke-filled environments.</li>
                <li><strong>Random Timings:</strong> Conduct drills at different times of the day to account for shift changes.</li>
            </ul>
        `
    },
    'fatigue-workplace-safety': {
        title: "Workplace Fatigue & Safety",
        category: "Mental Health",
        date: "Aug 15, 2025",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1454165833222-3853b4968f21?q=80&w=1200&auto=format&fit=crop",
        content: `
            <p>Exhaustion is a silent killer in the industrial workplace. A fatigued employee has the same reaction time and judgment impairments as someone who is legally intoxicated.</p>
            
            <p>Employers should implement fatigue management systems that include mandatory rest periods and shift limits.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');

    if (postId && blogData[postId]) {
        const post = blogData[postId];

        // Update basic info
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postCategory').textContent = post.category;
        document.getElementById('postDate').innerHTML = `<i class="far fa-calendar-alt mr-2"></i> ${post.date}`;
        document.getElementById('postReadTime').innerHTML = `<i class="far fa-clock mr-2"></i> ${post.readTime}`;
        document.getElementById('postImage').src = post.image;
        document.getElementById('postContent').innerHTML = post.content;

        document.title = `TrainComply Solutions | ${post.title}`;

        // Populate Related Posts
        const relatedContainer = document.getElementById('relatedPosts');
        const otherPosts = Object.keys(blogData).filter(id => id !== postId).slice(0, 2);

        relatedContainer.innerHTML = otherPosts.map(id => {
            const relPost = blogData[id];
            return `
                <div class="group cursor-pointer" onclick="window.location.href='blog-details.html?post=${id}'">
                    <div class="rounded-2xl overflow-hidden h-40 mb-4">
                        <img src="${relPost.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <span class="text-xs font-bold text-primary-600 uppercase mb-2 block">${relPost.category}</span>
                    <h4 class="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">${relPost.title}</h4>
                </div>
            `;
        }).join('');
    }
});
