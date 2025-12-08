document.addEventListener('DOMContentLoaded', function() {
    const appsContainer = document.getElementById('appsContainer');
    
    // App configuration with names, links, and icons
    const apps = [
        { 
            name: "Action", 
            file: "Action.html", 
            icon: "icon/Action.png",
            bgColor: "#f5cb11"  // Purple accent
        },
        { 
            name: "Reload IP", 
            file: "Reload IP.html", 
            icon: "icon/reload.png",
            bgColor: "#11f5da"  // Blue accent
        },
        { 
            name: "SFCS", 
            file: "SFCS.html", 
            icon: "icon/server.webp",
            bgColor: "#791c65ff"  // Blue accent
        },
        { 
            name: "Ether IP", 
            file: "etherip.html", 
            icon: "icon/bulb.webp",
            bgColor: "#00355bff"  // Blue accent
        },
        { 
            name: "HEX Calculator", 
            file: "hexcal.html", 
            icon: "icon/calculator.png",
            bgColor: "#2a4c52ff"  // Blue accent
        },
        { 
            name: "Root Port", 
            file: "rootport.html", 
            icon: "icon/base.png",
            bgColor: "#331e65ff"  // Blue accent
        },
        { 
            name: "Card Info", 
            file: "cardinfo.html", 
            icon: "icon/rootport.png",
            bgColor: "#254a5dff"  // Blue accent
        },
        { 
            name: "Push Keg Igor", 
            file: "pushkegigor.html", 
            icon: "icon/kegigor.webp",
            bgColor: "#7b264aff"  // Blue accent
        },
        { 
            name: "Snake", 
            file: "Snake.html", 
            icon: "icon/snake.webp",
            bgColor: "#582222ff"  // Blue accent
        },
        { 
            name: "Tower Defense", 
            file: "towerdefense.html", 
            icon: "icon/tower.webp",
            bgColor: "#222f58ff"  // Blue accent
        },
        { 
            name: "Math Kids", 
            file: "Math.html", 
            icon: "icon/math.png",
            bgColor: "#222f58ff"  // Blue accent
        },
    ];

    
    // Create app icons
    function createAppIcons() {
        appsContainer.innerHTML = '';
        
        apps.forEach(app => {
            const appItem = document.createElement('div');
            appItem.className = 'app-item';
            appItem.onclick = () => window.location.href = app.file;
            
            const appIcon = document.createElement('div');
            appIcon.className = 'app-icon';
            appIcon.style.backgroundColor = app.bgColor;
            
            // Create icon image
            const iconImg = document.createElement('img');
            iconImg.src = app.icon;
            iconImg.alt = app.name;
            iconImg.onerror = function() {
                // Fallback to Font Awesome icon if image fails to load
                this.style.display = 'none';
                const fallbackIcon = document.createElement('i');
                fallbackIcon.className = 'fas fa-question';
                appIcon.appendChild(fallbackIcon);
            };
            appIcon.appendChild(iconImg);
            
            const appNameElement = document.createElement('div');
            appNameElement.className = 'app-name';
            appNameElement.textContent = app.name;
            
            appItem.appendChild(appIcon);
            appItem.appendChild(appNameElement);
            appsContainer.appendChild(appItem);
        });
    }
    
    // Initialize the app
    createAppIcons();
});