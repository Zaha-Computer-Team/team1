const defaultConfig = {
    // Main center information in Arabic
    center_name: "مركز زها الثقافي", // Main heading text displayed in header
    center_tagline: "اكتشف أفرقة مركز زها الثقافي الرائعة حيث يستكشف الطلاب شغفهم ويطورون مهارات جديدة ويبنون صداقات دائمة", // Subtitle text in header
    
    // Team 1 (Football) information - editable via edit panel
    team_1_name: "فريق كرة القدم", // Name of the first team
    team_1_description: "لاعبو كرة قدم متحمسون يتدربون بجد ويتنافسون بشرف ويبنون مهارات العمل الجماعي داخل وخارج الملعب.", // Description of first team
    
    // Team 2 (Robotics) information - editable via edit panel
    team_2_name: "فريق الروبوتات", // Name of the second team
    team_2_description: "مهندسون مبتكرون يصممون ويبنون ويبرمجون الروبوتات أثناء تعلم التكنولوجيا المتطورة ومهارات حل المشكلات.", // Description of second team
    
    // Team 3 (Piano) information - editable via edit panel
    team_3_name: "فريق البيانو", // Name of the third team
    team_3_description: "عازفو بيانو موهوبون يتقنون القطع الكلاسيكية والحديثة ويؤدون في الحفلات الموسيقية ويشاركون فرحة الموسيقى مع الآخرين.", // Description of third team
    
    // Color scheme configuration - customizable via Canva's color picker
    primary_color: "#184682", // Main brand color used in header and accents
    secondary_color: "#00899a", // Secondary color used in gradients and highlights
    accent_color: "#f25242", // Accent color for special elements and emphasis
    text_color: "#000000", // Main text color for headings and content
    background_color: "#f1ede5" // Page background color - ivory/beige
};

// Language translations object containing English and Arabic text
const translations = {
    en: {
        // Header content
        center_name: "Zaha Cultural Center",
        center_tagline: "Discover amazing zaha clubs where students explore their passions, develop new skills, and build lasting friendships",
        
        // Navigation and UI
        language_text: "العربية",
        our_teams: "Our Center Teams",
        teams_description: "Join our vibrant Zaha Center Teams and discover your talents while making new friends and creating unforgettable memories",
        watch_teams_video: "Watch Our Teams in Action",
        video_description: "See how our students thrive in their favorite activities",
        click_to_explore: "Click to explore →",
        back_to_teams: "Back to Teams",
        meet_our_team: "Meet Our Team",
        team_coaches: "Team Coachs andAdvisors",
        team_members: "Team Members",
        featured_projects: "Team Activities",
        upcoming_events: "Upcoming Events",
        awards_recognition: "Awards & Achievements",
        photo_gallery: "Photo Gallery",
        video_gallery: "Video Gallery",
        follow_us: "Follow Us",
        our_location: "Our Location",
        zaha_address: "Khalda, behind the English schools, near the Arab Bank traffic lights",
        zaha_phone: "+962 065531577 ",
        operating_hours: "Operating Hours",
        sunday_thursday: "Sunday - Thursday:",
        friday: "Friday:",
        saturday: "Saturday:",
        closed_friday: "Closed",
        currently_open: "Currently Open",
        copyright: "© 2025 Zaha Center. All rights reserved.",
        breaking_news: "Breaking News",
        
        // Team names and descriptions
        team_1_name: "Football Team",
        team_1_description: "Passionate football players who train hard, compete with honor, and build teamwork skills on and off the field.",
        team_2_name: "Robotics Team",
        team_2_description: "Innovative engineers who design, build, and program robots while learning cutting-edge technology and problem-solving skills.",
        team_3_name: "Piano Team",
         team_3_description: "Talented pianists who master classical and modern pieces, perform in concerts, and share the joy of music with others.",
        
        // About and Contact sections
        about_title: "About Zaha Cultural Center",
        about_description: "Zaha Cultural Center is an educational cultural center that aims to develop talents and creativity among students through various teams and activities.",
        contact_title: "Contact Us",
        contact_description: "We are here to answer your questions and listen to your suggestions",
        contact_info_title: "Contact Information",
        contact_hours_title: "Operating Hours"
    },
    ar: {
        // Header content
        center_name: "مركز زها الثقافي",
        center_tagline: "اكتشف أفرقة مركز زها الثقافي الرائعة حيث يستكشف الطلاب شغفهم ويطورون مهارات جديدة ويبنون صداقات دائمة",
        
        // Navigation and UI
        language_text: "English",
        our_teams: "أفرقة مركزنا",
        teams_description: "انضم إلى أنديتنا النابضة بالحياة واكتشف مواهبك أثناء تكوين أصدقاء جدد وخلق ذكريات لا تُنسى",
        watch_teams_video: "شاهد أنديتنا في العمل",
        video_description: "انظر كيف يزدهر طلابنا في أنشطتهم المفضلة",
        click_to_explore: "انقر للاستكشاف ←",
        back_to_teams: "العودة إلى الأندية",
        meet_our_team: "تعرف على ناديّنا",
        team_coaches: "مستشارو النادي",
        team_members: "أعضاء النادي",
        featured_projects: "أنشطة النادي",
        upcoming_events: "الأحداث القادمة",
        awards_recognition: "الجوائز والإنجازات",
        photo_gallery: "معرض الصور",
        video_gallery: "معرض الفيديوهات",
        follow_us: "تابعنا على",
        our_location: "موقعنا", 
        school_address: "خلدا ,خلف المدارس الإنجليزية, قرب اشارات البنك العربي",
        school_phone: "+962 065531577 ",
        operating_hours: "أوقات العمل",
        sunday_thursday: "الأحد - الخميس:",
        friday: "الجمعة:",
        saturday: "السبت:",
        closed_friday: "مغلق",
        currently_open: "مفتوح الآن",
        copyright: "© 2025 مركز زها الثقافي. جميع الحقوق محفوظة.",
        breaking_news: "أخبار عاجلة",
        
        // Team names and descriptions
        team_1_name: "فريق كرة القدم",
        team_1_description: "لاعبو كرة قدم متحمسون يتدربون بجد ويتنافسون بشرف ويبنون مهارات العمل الجماعي داخل وخارج الملعب.",
        team_2_name: "فريق الروبوتات",
        team_2_description: "مهندسون مبتكرون يصممون ويبنون ويبرمجون الروبوتات أثناء تعلم التكنولوجيا المتطورة ومهارات حل المشكلات.",
        team_3_name: "فريق البيانو",
        team_3_description: "عازفو بيانو موهوبون يتقنون القطع الكلاسيكية والحديثة ويؤدون في الحفلات الموسيقية ويشاركون فرحة الموسيقى مع الآخرين."
    }
};

// Current language state - Arabic is now default
let currentLanguage = 'ar';

// Language toggle function - switches between English and Arabic
function toggleLanguage() {
    // Switch to opposite language
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    
    // Update document direction for RTL/LTR
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    // Update all translatable text elements
    updateLanguageContent();
           
    // Update navigation language
    updateNavigationLanguage();
}

// Updates all text content based on current language
function updateLanguageContent() {
    const t = translations[currentLanguage]; // Get current language translations
    
    // Update language toggle button text
    document.getElementById('language-text').textContent = t.language_text;
    
    // Update news ticker content
    const newsTicker = document.getElementById('news-ticker');
    if (newsTicker) {
        if (currentLanguage === 'ar') {
            newsTicker.textContent = '🏆 فريق كرة القدم يفوز بالبطولة الإقليمية 3-1 • 🤖 فريق الروبوتات يتأهل لنهائيات FIRST الوطنية • 🎹 فريق البيانو ينظم حفلاً خيرياً الأسبوع القادم • 🎸 فريق الجيتار يسجل أول أغنية أصلية في الاستوديو • 💃 فريق الدبكة يحصل على المركز الأول في مهرجان الفنون المحلي • 💻 فريق البرمجة يطلق تطبيق  جديد';
        } else {
            newsTicker.textContent = '🏆 Football team wins regional championship 3-1 • 🤖 Robotics team qualifies for national FIRST finals • 🎹 Piano team hosting charity concert next week • 🎸 Guitar team records first original song in studio • 💃 Dabka team wins first place in local arts festival • 💻 Coding team launches new school management app';
        }
    }
    
    // Update header content
    document.getElementById('center-name').textContent = t.center_name;
    document.getElementById('center-tagline').textContent = t.center_tagline;
    
    // Update team names and descriptions
    document.getElementById('team-1-name').textContent = t.team_1_name;
    document.getElementById('team-1-description').textContent = t.team_1_description;
    document.getElementById('team-2-name').textContent = t.team_2_name;
    document.getElementById('team-2-description').textContent = t.team_2_description;
    document.getElementById('team-3-name').textContent = t.team_3_name;
    document.getElementById('team-3-description').textContent = t.team_3_description;
    
    // Update section headings and static text
    const ourClubsTitle = document.getElementById('our-clubs-title');
    if (ourClubsTitle) ourClubsTitle.textContent = t.our_teams;
    
    const clubsDescription = document.getElementById('clubs-description');
    if (clubsDescription) clubsDescription.textContent = t.teams_description;
    
    // Update category tags
    const sportsTag = document.getElementById('sports-tag');
    if (sportsTag) sportsTag.textContent = currentLanguage === 'ar' ? 'رياضة' : 'Sports';
    
    const technologyTag = document.getElementById('technology-tag');
    if (technologyTag) technologyTag.textContent = currentLanguage === 'ar' ? 'تكنولوجيا' : 'Technology';
    
    const musicTag1 = document.getElementById('music-tag-1');
    if (musicTag1) musicTag1.textContent = currentLanguage === 'ar' ? 'موسيقى' : 'Music';
    
    const musicTag2 = document.getElementById('music-tag-2');
    if (musicTag2) musicTag2.textContent = currentLanguage === 'ar' ? 'موسيقى' : 'Music';
    
    const artsTag = document.getElementById('arts-tag');
    if (artsTag) artsTag.textContent = currentLanguage === 'ar' ? 'فنون' : 'Arts';
    
    const technologyTag2 = document.getElementById('technology-tag-2');
    if (technologyTag2) technologyTag2.textContent = currentLanguage === 'ar' ? 'تكنولوجيا' : 'Technology';
    
    // Update "Click to explore" text in team cards
    for (let i = 1; i <= 6; i++) {
        const exploreText = document.getElementById(`explore-text-${i}`);
        if (exploreText) exploreText.textContent = t.click_to_explore;
    }
    
    // Update footer content
    const socialMediaTitle = document.getElementById('social-media-title');
    if (socialMediaTitle) socialMediaTitle.textContent = t.follow_us;
    
    const locationTitle = document.getElementById('location-title');
    if (locationTitle) locationTitle.textContent = t.our_location;
    
    const schoolAddress = document.getElementById('school-address');
    if (schoolAddress) schoolAddress.textContent = t.school_address;
    
    const schoolPhone = document.getElementById('school-phone');
    if (schoolPhone) schoolPhone.textContent = t.school_phone;
    
    const hoursTitle = document.getElementById('hours-title');
    if (hoursTitle) hoursTitle.textContent = t.operating_hours;
    
    const sundayThursday = document.getElementById('sunday-thursday');
    if (sundayThursday) sundayThursday.textContent = t.sunday_thursday;
    
    const friday = document.getElementById('friday');
    if (friday) friday.textContent = t.friday;
    
    const saturday = document.getElementById('saturday');
    if (saturday) saturday.textContent = t.saturday;
    
    const closedFriday = document.getElementById('closed-friday');
    if (closedFriday) closedFriday.textContent = t.closed_friday;
    
    const currentlyOpen = document.getElementById('currently-open');
    if (currentlyOpen) currentlyOpen.textContent = t.currently_open;
    
    const copyright = document.getElementById('copyright');
    if (copyright) copyright.textContent = t.copyright;
    
    const breakingNewsLabel = document.getElementById('breaking-news-label');
    if (breakingNewsLabel) breakingNewsLabel.textContent = t.breaking_news;
    
    // Update team detail page elements
    const backToClubs = document.getElementById('back-to-clubs');
    if (backToClubs) backToClubs.textContent = t.back_to_teams;
    
    const meetOurClub = document.getElementById('meet-our-club');
    if (meetOurClub) meetOurClub.textContent = t.meet_our_team;
    
    const clubAdvisors = document.getElementById('club-advisors');
    if (clubAdvisors) clubAdvisors.textContent = t.team_coaches;
    
    const clubMembers = document.getElementById('club-members');
    if (clubMembers) clubMembers.textContent = t.team_members;
    
    const clubActivities = document.getElementById('club-activities');
    if (clubActivities) clubActivities.textContent = t.featured_projects;
    
    const upcomingEvents = document.getElementById('upcoming-events');
    if (upcomingEvents) upcomingEvents.textContent = t.upcoming_events;
    
    const awardsAchievements = document.getElementById('awards-achievements');
    if (awardsAchievements) awardsAchievements.textContent = t.awards_recognition;
    
    // Update gallery section titles
    const photoGalleryTitle = document.getElementById('photo-gallery-title');
    if (photoGalleryTitle) photoGalleryTitle.textContent = t.photo_gallery;
    
    const videoGalleryTitle = document.getElementById('video-gallery-title');
    if (videoGalleryTitle) videoGalleryTitle.textContent = t.video_gallery;
    // Update About section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = t.about_title;
    
    const aboutDescription = document.getElementById('about-description');
    if (aboutDescription) aboutDescription.textContent = t.about_description;
    
    // Update Contact section
    const contactTitle = document.getElementById('contact-title');
    if (contactTitle) contactTitle.textContent = t.contact_title;
    
    const contactDescription = document.getElementById('contact-description');
    if (contactDescription) contactDescription.textContent = t.contact_description;
    
    const contactInfoTitle = document.getElementById('contact-info-title');
    if (contactInfoTitle) contactInfoTitle.textContent = t.contact_info_title;
    
    const contactHoursTitle = document.getElementById('contact-hours-title');
    if (contactHoursTitle) contactHoursTitle.textContent = t.contact_hours_title;
}

// School club team data object containing detailed information for all 6 clubs
const teamData = {
    // Football team - school sports club
    football: {
        name: "فريق كرة القدم",
        description: "لاعبو كرة قدم متحمسون يتدربون بجد ويتنافسون بشرف ويبنون مهارات العمل الجماعي داخل وخارج الملعب. يشارك الفريق في البطولات المحلية والإقليمية، ويركز على تطوير المهارات الفردية والجماعية. يتعلم الأعضاء قيم الانضباط والمثابرة والعمل الجماعي من خلال التدريبات المنتظمة والمباريات التنافسية.",
        gradient: "from-green-500 to-teal-600",
        backgroundColor: "#00a240",
        coaches: [
            
            { name: "Coach Johnson", title: "Assistant Coach", initials: "CJ", experience: "8+ years coaching • Fitness specialist", gradient: "from-teal-400 to-blue-500" },
        ],
        members: [
            { name: "Alex Rodriguez", role: "Team Captain", initials: "AR", gradient: "from-green-300 to-teal-400" },
            { name: "Marcus Thompson", role: "Goalkeeper", initials: "MT", gradient: "from-teal-300 to-blue-400" },
            { name: "David Kim", role: "Midfielder", initials: "DK", gradient: "from-blue-300 to-indigo-400" },
            { name: "Carlos Santos", role: "Forward", initials: "CS", gradient: "from-indigo-300 to-purple-400" },
            
        ],
        projects: [
            { title: "Regional Championship", description: "Competing in the regional high school football championship with intensive training and strategic gameplay.", emoji: "🏆", tags: ["Competition", "Championship", "Teamwork"], gradient: "from-green-400 to-teal-500" },
            { title: "Youth Training Camp", description: "Organizing summer training camps for younger students to learn football basics and develop skills.", emoji: "⚽", tags: ["Training", "Youth", "Skills"], gradient: "from-teal-400 to-blue-500" },
            { title: "Community Outreach", description: "Visiting local elementary schools to promote sports and healthy lifestyle among younger children.", emoji: "🤝", tags: ["Community", "Outreach", "Health"], gradient: "from-blue-400 to-indigo-500" },
            { title: "Fitness Program", description: "Year-round fitness and conditioning program to maintain peak physical performance and prevent injuries.", emoji: "💪", tags: ["Fitness", "Health", "Performance"], gradient: "from-indigo-400 to-purple-500" }
        ],
        events: [
            { title: "Spring Tournament", description: "Annual spring football tournament featuring matches against neighboring schools and skill competitions.", date: "April 15-17, 2024 • All Day", type: "Tournament" },
            { title: "Team Building Workshop", description: "Leadership and teamwork workshop focusing on communication, strategy, and team cohesion.", date: "March 28, 2024 • 2:00 PM - 5:00 PM", type: "Workshop" }
        ],
        awards: [
            { title: "District Champions 2023", subtitle: "Outstanding Team Performance", description: "Won the district championship with an undefeated season, showcasing exceptional teamwork and dedication.", icon: "🏆", gradient: "from-green-50 to-teal-50", border: "border-green-200" },
            { title: "Sportsmanship Award", subtitle: "Fair Play Excellence", description: "Recognized for exemplary sportsmanship and positive attitude both on and off the field.", icon: "⭐", gradient: "from-teal-50 to-blue-50", border: "border-teal-200" }
        ],
        photos: [
            { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop", caption: "Match day practice" },
            { src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop", caption: "Team huddle" },
            { src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1200&auto=format&fit=crop", caption: "Goal celebration" }
        ],
        videos: [
             { iframe:"images/robot2.mp4", caption: "FIRST LEGO League highlights" },
            { iframe: "images/robot.mp4", caption: "Robot demo" }
        ]
    },
    robotics: {
        name: "فريق الروبوتات",
        description: "مهندسون مبتكرون يصممون ويبنون ويبرمجون الروبوتات أثناء تعلم التكنولوجيا المتطورة ومهارات حل المشكلات. يعمل الفريق على مشاريع متنوعة من الروبوتات المستقلة إلى أنظمة الذكاء الاصطناعي. يشارك الأعضاء في مسابقات الروبوتات المحلية والدولية، ويتعلمون البرمجة والهندسة الميكانيكية والإلكترونيات.",
        gradient: "from-blue-500 to-purple-600",
        backgroundColor: "#184682",
        coaches: [
            { name: "Dr.abd alrahman mahamed", title: "Faculty Advisor", initials: "SC", experience: "12+ years engineering • Robotics specialist", gradient: "from-blue-400 to-purple-500" },
          
        ],
        members: [
            { name: "sara", role: "Team Leader", initials: "EJ", gradient: "from-blue-300 to-purple-400" },
            { name: "ahamd", role: "Programmer", initials: "KL", gradient: "from-purple-300 to-indigo-400" },
            { name: "yousef", role: "Mechanical Engineer", initials: "SM", gradient: "from-indigo-300 to-blue-400" },
            { name: "farah", role: "Electronics Specialist", initials: "JW", gradient: "from-blue-300 to-cyan-400" },
            
        ],
        projects: [
            { title: "Competition Robot", description: "Designing and building an autonomous robot for the FIRST Robotics Competition with advanced sensors and AI.", emoji: "🤖", tags: ["Competition", "AI", "Autonomous"], gradient: "from-blue-400 to-purple-500" },
            { title: "Smart Home System", description: "Creating an IoT-based smart home automation system with voice control and mobile app integration.", emoji: "🏠", tags: ["IoT", "Smart Home", "Automation"], gradient: "from-purple-400 to-indigo-500" },
            { title: "Educational Workshops", description: "Teaching younger students basic robotics and programming through hands-on workshops and demonstrations.", emoji: "🎓", tags: ["Education", "Teaching", "Workshops"], gradient: "from-indigo-400 to-blue-500" },
            { title: "Environmental Monitor", description: "Building sensors to monitor air quality and environmental conditions around the school campus.", emoji: "🌱", tags: ["Environment", "Sensors", "Monitoring"], gradient: "from-blue-400 to-cyan-500" }
        ],
        events: [
            { title: "FIRST Robotics Regional", description: "Competing in the regional FIRST Robotics Competition with our custom-built autonomous robot.", date: "March 22-24, 2024 • All Day", type: "Competition" },
            { title: "Coding Bootcamp", description: "Intensive programming workshop covering Python, Arduino, and robot control systems.", date: "April 5, 2024 • 9:00 AM - 4:00 PM", type: "Workshop" }
        ],
        awards: [
            { title: "Innovation Award 2023", subtitle: "Creative Engineering Solution", description: "Recognized for innovative robot design that solved complex challenges with creative engineering approaches.", icon: "💡", gradient: "from-blue-50 to-purple-50", border: "border-blue-200" },
            { title: "Regional Finalists", subtitle: "Outstanding Competition Performance", description: "Advanced to regional finals in FIRST Robotics Competition, demonstrating technical excellence and teamwork.", icon: "🏅", gradient: "from-purple-50 to-indigo-50", border: "border-purple-200" }
        ],
        photos: [
            { src: "images/robotics1.jpg", caption: "Team cheering at auditorium" },
            { src: "images/robotics2.jpg", caption: "Group photo with pom-poms" },
            { src: "images/robotics3.jpg", caption: "With coach after event" },
            { src: "images/robotics4.jpg", caption: "With judges at competition" }
        ],
        videos: [
             { iframe:"images/robot2.mp4", caption: "FIRST LEGO League highlights" },
            { iframe: "images/robot.mp4", caption: "Robot demo" }
        ]
    },
    piano: {
        name: "فريق البيانو",
        description: "عازفو بيانو موهوبون يتقنون القطع الكلاسيكية والحديثة ويؤدون في الحفلات الموسيقية ويشاركون فرحة الموسيقى مع الآخرين. يتدرب الأعضاء على تقنيات العزف المتقدمة ويشاركون في المسابقات الموسيقية. يقدم الفريق عروضاً منتظمة في المدرسة والمجتمع المحلي، ويتعلم الأعضاء نظريات الموسيقى والتأليف.",
        gradient: "from-red-500 to-orange-600",
        backgroundColor: "#f25242",
        coaches: [
            { name:" الاستاد احمد ", title: "مدربة البيانو", initials: "ER", experience: "أكثر من 20 عاماً في التدريس • عازفة بيانو محترفة", gradient: "from-red-400 to-orange-500" },
            
        ],
        members: [
            { name: "esam", role: "Lead Pianist", initials: "IC", gradient: "from-red-300 to-orange-400" },
            { name: "hosam", role: "Classical Specialist", initials: "MJ", gradient: "from-orange-300 to-yellow-400" },
            { name: "nawras", role: "Contemporary Player", initials: "SM", gradient: "from-yellow-300 to-green-400" },
            { name: "farah", role: "Jazz Pianist", initials: "EK", gradient: "from-green-300 to-teal-400" },
        ],

        projects: [
            { title: "Spring Concert", description: "Annual spring concert featuring solo performances, duets, and ensemble pieces from classical to contemporary.", emoji: "🎹", tags: ["Concert", "Performance", "Classical"], gradient: "from-red-400 to-orange-500" },
            { title: "Community Performances", description: "Regular performances at local nursing homes, hospitals, and community events to share music with others.", emoji: "🎵", tags: ["Community", "Service", "Outreach"], gradient: "from-orange-400 to-yellow-500" },
            { title: "Music Composition", description: "Creating original compositions and arrangements, exploring different musical styles and techniques.", emoji: "🎼", tags: ["Composition", "Creativity", "Original"], gradient: "from-yellow-400 to-green-500" },
            { title: "Masterclass Series", description: "Hosting masterclasses with professional pianists and learning advanced techniques and interpretation.", emoji: "🎓", tags: ["Masterclass", "Learning", "Professional"], gradient: "from-green-400 to-teal-500" }
        ],
        events: [
            { title: "A party with the Zaha Ladies Choir", description: "Showcase recital featuring all piano team members performing their best pieces for family and friends.", date: "May 10, 2025 • 7:00 PM - 9:00 PM", type: "Recital" },
            { title: "Piano Competition", description: "Regional piano competition where students compete in various categories and skill levels.", date: "April 20, 2024 • 10:00 AM - 6:00 PM", type: "Competition" }
        ],
        awards: [
            { title: "Excellence in Music 2023", subtitle: "Outstanding Musical Achievement", description: "Recognized for exceptional musical performances and dedication to advancing piano education in the school.", icon: "🎖️", gradient: "from-red-50 to-orange-50", border: "border-red-200" },
            { title: "jarash", subtitle: "Musical Outreach Excellence", description: "Honored for bringing joy through music to community members through regular volunteer performances.", icon: "🌟", gradient: "from-orange-50 to-yellow-50", border: "border-orange-200" }
        ],
        photos: [
            { src: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1200&auto=format&fit=crop", caption: "Kids learning piano" },
            { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop", caption: "Practice time" },
            { src: "https://images.unsplash.com/photo-1508779018996-480c1e4e4d0a?q=80&w=1200&auto=format&fit=crop", caption: "Recital" }
        ],
        videos: [
  { iframe:"images/robot2.mp4", caption: "FIRST LEGO League highlights" },
            { iframe: "images/robot.mp4", caption: "Robot demo" }
        ]
    },
    guitar: {
        name: "Guitar Team",
        description: "Skilled guitarists who explore various music styles, from acoustic melodies to electric rock, creating amazing performances.",
        gradient: "from-yellow-500 to-orange-600",
        backgroundColor: "#ffba00",
        coaches: [
            { name: "Mr. ali shrida", title: "Guitar Instructor", initials: "CM", experience: "18+ years teaching • Professional guitarist", gradient: "from-yellow-400 to-orange-500" },
           
        ],
        members: [
            { name: "abdallh haroun", role: "Lead Guitarist", initials: "JM", gradient: "from-yellow-300 to-orange-400" },
            { name: "qusay", role: "Acoustic Specialist", initials: "ZC", gradient: "from-orange-300 to-red-400" },
            { name: "sale", role: "Bass Guitarist", initials: "MJ", gradient: "from-red-300 to-pink-400" },
            { name: "farah", role: "Rhythm Guitarist", initials: "LR", gradient: "from-pink-300 to-purple-400" },
           
        ],
        projects: [
            { title: "Rock Band Formation", description: "Forming complete rock bands with guitar, bass, drums, and vocals for school performances and competitions.", emoji: "🎸", tags: ["Rock", "Band", "Performance"], gradient: "from-yellow-400 to-orange-500" },
            { title: "Acoustic Sessions", description: "Intimate acoustic performances featuring original songs and popular covers in a coffee house setting.", emoji: "🎶", tags: ["Acoustic", "Original", "Intimate"], gradient: "from-orange-400 to-red-500" },
            { title: "Music Production", description: "Learning to record, mix, and produce music using digital audio workstations and professional equipment.", emoji: "🎧", tags: ["Production", "Recording", "Technology"], gradient: "from-red-400 to-pink-500" },
            { title: "Songwriting Workshop", description: "Collaborative songwriting sessions where students create original music and learn composition techniques.", emoji: "✍️", tags: ["Songwriting", "Composition", "Creativity"], gradient: "from-pink-400 to-purple-500" }
        ],
        events: [
            { title: "Battle of the Bands", description: "Annual competition where student bands compete in different categories with original and cover songs.", date: "April 12, 2024 • 6:00 PM - 10:00 PM", type: "Competition" },
            { title: "Open Mic Night", description: "Monthly open mic event where students can perform solo or in groups in a supportive environment.", date: "Every 3rd Friday • 7:00 PM - 9:00 PM", type: "Performance" }
        ],
        awards: [
            { title: "Best School Band 2023", subtitle: "Outstanding Musical Performance", description: "Won the regional high school battle of the bands competition with original compositions and stellar performances.", icon: "🏆", gradient: "from-yellow-50 to-orange-50", border: "border-yellow-200" },
            { title: "Creativity Award", subtitle: "Original Music Excellence", description: "Recognized for exceptional creativity in songwriting and innovative musical arrangements.", icon: "🎨", gradient: "from-orange-50 to-red-50", border: "border-orange-200" }
        ],
        photos: [
            { src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop", caption: "Guitar practice" },
            { src: "https://images.unsplash.com/photo-1516924962500-2b4b3b3b4d83?q=80&w=1200&auto=format&fit=crop", caption: "Band rehearsal" },
            { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop", caption: "Learning chords" }
        ],
        videos: [
              { iframe:"team1-main/getar.mp4", caption: "FIRST LEGO League highlights" },
           
              { iframe: "team1-main/getar.mp4", caption: "Robot demo" } ,

              
            {iframe : " team1-main/getar.mp4 " , caption : "Guitarists full of energy, feeling} the music" } ,
            
            {  iframe : "team1-main/getar.mp4" , caption : "gret Guitarists" }




        ]
    },
    dance: {
        name: "Dabka Team",
        description: "Energetic dancers who express creativity through movement, perform in competitions, and bring joy through artistic expression.",
        gradient: "from-purple-500 to-pink-600",
        backgroundColor: "#8062c6",
        coaches: [
            { name: "Ms. razan", title: "Dance Director", initials: "MS", experience: "10+ years teaching • Professional dancer", gradient: "from-purple-400 to-pink-500" },
          
        ],
        members: [
            { name: "sally", role: "Team Captain", initials: "AT", gradient: "from-purple-300 to-pink-400" },
            { name: "talia", role: "Hip-Hop Dancer", initials: "JM", gradient: "from-pink-300 to-red-400" },
            { name: "lara", role: "Contemporary Dancer", initials: "CK", gradient: "from-red-300 to-orange-400" },
            { name: "hala", role: "Jazz Dancer", initials: "TJ", gradient: "from-orange-300 to-yellow-400" },
       
        ],
        projects: [
            { title: "Annual Dance Showcase", description: "Major performance featuring all dance styles from ballet to hip-hop, showcasing student choreography and skills.", emoji: "💃", tags: ["Showcase", "Performance", "Choreography"], gradient: "from-purple-400 to-pink-500" },
            { title: "Competition Team", description: "Elite competition team that travels to regional and national dance competitions in various categories.", emoji: "🏆", tags: ["Competition", "Elite", "Travel"], gradient: "from-pink-400 to-red-500" },
            { title: "Community Performances", description: "Regular performances at local events, festivals, and charity fundraisers to support the community.", emoji: "🎭", tags: ["Community", "Charity", "Outreach"], gradient: "from-red-400 to-orange-500" },
            { title: "Dance Workshops", description: "Teaching dance basics to younger students and hosting workshops with professional guest instructors.", emoji: "🎓", tags: ["Teaching", "Workshops", "Education"], gradient: "from-orange-400 to-yellow-500" }
        ],
        events: [
            { title: "Spring Dance Competition", description: "Regional dance competition featuring solo, duo, and group performances in multiple dance categories.", date: "March 30, 2024 • 9:00 AM - 8:00 PM", type: "Competition" },
            { title: "Choreography Workshop", description: "Intensive workshop on creating original choreography with guest professional choreographer.", date: "April 8, 2024 • 1:00 PM - 5:00 PM", type: "Workshop" }
        ],
        awards: [
            { title: "Regional Champions 2023", subtitle: "Outstanding Dance Performance", description: "Won first place in regional dance competition with innovative choreography and flawless execution.", icon: "👑", gradient: "from-purple-50 to-pink-50", border: "border-purple-200" },
            { title: "Artistic Excellence Award", subtitle: "Creative Choreography", description: "Recognized for exceptional creativity and artistic expression in original dance compositions.", icon: "🎨", gradient: "from-pink-50 to-red-50", border: "border-pink-200" }
        ],
        photos: [
            { src: "images/dabka1.jpg", caption: "Performance at Jerash" },
            { src: "images/dabka2.jpg", caption: "Team at Roman columns" },
            { src: "images/dabka3.jpg", caption: "Stage performance in white" },
            { scr: ""}
        
        
        ],
        
        videos: [
             { iframe:"images/robot2.mp4", caption: "FIRST LEGO League highlights" },
            { iframe: "images/robot.mp4", caption: "Robot demo" },
             {  iframe: "videoplayback.mp4", caption: " Dabke dancers full of energy, art, and heritage " },
             
             ]
             
    },
    coding: {
        name: "Coding Team",
        description: "Creative programmers who develop apps, websites, and games while learning programming languages and computational thinking.",
        gradient: "from-cyan-500 to-blue-600",
        backgroundColor: "#00899a",
        coaches: [
          
            { name: "Ms. mays alkalel", title: "Programming Mentor", initials: "RK", experience: "8+ years industry • Web developer", gradient: "from-blue-400 to-indigo-500" }
        ],
        members: [
            { name: "Ruqaya", role: "Team Lead", initials: "RZ", gradient: "from-cyan-300 to-blue-400" },
            { name: "Essam", role: "Web Developer", initials: "SJ", gradient: "from-blue-300 to-indigo-400" },
            { name: "Ali", role: "Game Developer", initials: "MW", gradient: "from-indigo-300 to-purple-400" },
            { name: "Noor", role: "Mobile App Developer", initials: "AP", gradient: "from-purple-300 to-pink-400" },
       
        ],
        projects: [
            { title: "School Management App", description: "Developing a comprehensive mobile app for students to track assignments, grades, and school events.", emoji: "📱", tags: ["Mobile App", "School", "Management"], gradient: "from-cyan-400 to-blue-500" },
            { title: "Educational Games", description: "Creating interactive educational games to help younger students learn math, science, and programming concepts.", emoji: "🎮", tags: ["Games", "Education", "Interactive"], gradient: "from-blue-400 to-indigo-500" },
            { title: "Website Development", description: "Building websites for local businesses and school clubs, learning full-stack web development skills.", emoji: "🌐", tags: ["Web Development", "Full-Stack", "Business"], gradient: "from-indigo-400 to-purple-500" },
            { title: "Coding Competitions", description: "Participating in programming contests and hackathons to solve complex problems under time pressure.", emoji: "🏅", tags: ["Competition", "Hackathon", "Problem Solving"], gradient: "from-purple-400 to-pink-500" }
        ],
        events: [
            { title: "Code-a-thon 2024", description: "24-hour coding marathon where teams build innovative solutions to real-world problems.", date: "April 26-27, 2024 • 24 Hours", type: "Hackathon" },
            { title: "Programming Workshop", description: "Beginner-friendly workshop teaching Python basics and introduction to computer science concepts.", date: "March 16, 2024 • 10:00 AM - 3:00 PM", type: "Workshop" }
        ],
        awards: [
            { title: "State Programming Champions", subtitle: "Outstanding Coding Skills", description: "Won the state high school programming competition with innovative solutions and excellent teamwork.", icon: "💻", gradient: "from-cyan-50 to-blue-50", border: "border-cyan-200" },
            { title: "Innovation Award", subtitle: "Creative Problem Solving", description: "Recognized for developing creative technological solutions that address real community needs.", icon: "🚀", gradient: "from-blue-50 to-indigo-50", border: "border-blue-200" }
        ],
        photos: [
            { src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop", caption: "Hackathon" },
            { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop", caption: "Coding together" },
            { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop", caption: "App development" }
        ],
        videos: [
             { iframe:"images/robot2.mp4", caption: "FIRST LEGO League highlights" },
            { iframe: "images/robot.mp4", caption: "Robot demo" }
        ]
    }
};

// Main configuration change handler - updates UI when config values change
async function onConfigChange(config) {
    // Update header content with new values from config or fallback to defaults
    document.getElementById('center-name').textContent = config.center_name || defaultConfig.center_name; // Update main heading
    document.getElementById('center-tagline').textContent = config.center_tagline || defaultConfig.center_tagline; // Update tagline
    
    // Update editable team information for first three teams
    document.getElementById('team-1-name').textContent = config.team_1_name || defaultConfig.team_1_name; // Update team 1 name
    document.getElementById('team-1-description').textContent = config.team_1_description || defaultConfig.team_1_description; // Update team 1 description
    document.getElementById('team-2-name').textContent = config.team_2_name || defaultConfig.team_2_name; // Update team 2 name
    document.getElementById('team-2-description').textContent = config.team_2_description || defaultConfig.team_2_description; // Update team 2 description
    document.getElementById('team-3-name').textContent = config.team_3_name || defaultConfig.team_3_name; // Update team 3 name
    document.getElementById('team-3-description').textContent = config.team_3_description || defaultConfig.team_3_description; // Update team 3 description

    // Extract color values from config with fallbacks to default colors
    const primaryColor = config.primary_color || defaultConfig.primary_color; // Main brand color
    const secondaryColor = config.secondary_color || defaultConfig.secondary_color; // Secondary accent color
    const textColor = config.text_color || defaultConfig.text_color; // Main text color
    const backgroundColor = config.background_color || defaultConfig.background_color; // Page background color

    // Apply color changes to page elements
    document.querySelector('header').style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`; // Update header gradient
    document.body.parentElement.style.background = `linear-gradient(135deg, ${backgroundColor} 0%, #ffffff 100%)`; // Update page background
    
    // Update text colors for all headings except those in header (which stay white)
    const headings = document.querySelectorAll('h1, h2, h3'); // Select all heading elements
    headings.forEach(heading => {
        if (!heading.closest('header')) { // Skip headings inside header element
            heading.style.color = textColor; // Apply custom text color
        }
    });
}

// Maps config properties to Canva's editing capabilities (color pickers, etc.)
function mapToCapabilities(config) {
    return {
        // Array of recolorable elements - each color can be customized via Canva's color picker
        recolorables: [
            {
                // Primary color capability - main brand color used in header and accents
                get: () => config.primary_color || defaultConfig.primary_color, // Returns current primary color value
                set: (value) => { // Updates primary color when user changes it
                    config.primary_color = value; // Update local config
                    window.elementSdk.setConfig({ primary_color: value }); // Persist change via SDK
                }
            },
            {
                // Secondary color capability - used in gradients and highlights
                get: () => config.secondary_color || defaultConfig.secondary_color, // Returns current secondary color value
                set: (value) => { // Updates secondary color when user changes it
                    config.secondary_color = value; // Update local config
                    window.elementSdk.setConfig({ secondary_color: value }); // Persist change via SDK
                }
            },
            {
                // Text color capability - main color for headings and content
                get: () => config.text_color || defaultConfig.text_color, // Returns current text color value
                set: (value) => { // Updates text color when user changes it
                    config.text_color = value; // Update local config
                    window.elementSdk.setConfig({ text_color: value }); // Persist change via SDK
                }
            },
            {
                // Background color capability - page background color
                get: () => config.background_color || defaultConfig.background_color, // Returns current background color value
                set: (value) => { // Updates background color when user changes it
                    config.background_color = value; // Update local config
                    window.elementSdk.setConfig({ background_color: value }); // Persist change via SDK
                }
            }
        ],
        borderables: [], // No border customization capabilities
        fontEditable: undefined, // No font family customization
        fontSizeable: undefined // No font size customization
    };
}

// Maps config values to edit panel fields - enables text editing via Canva's edit panel
function mapToEditPanelValues(config) {
    return new Map([
        // Main center information fields
        ["center_name", config.center_name || defaultConfig.center_name], // Maps center name to edit panel
        ["center_tagline", config.center_tagline || defaultConfig.center_tagline], // Maps tagline to edit panel
        
        // Team 1 (Football) editable fields
        ["team_1_name", config.team_1_name || defaultConfig.team_1_name], // Maps team 1 name to edit panel
        ["team_1_description", config.team_1_description || defaultConfig.team_1_description], // Maps team 1 description to edit panel
        
        // Team 2 (Robotics) editable fields
        ["team_2_name", config.team_2_name || defaultConfig.team_2_name], // Maps team 2 name to edit panel
        ["team_2_description", config.team_2_description || defaultConfig.team_2_description], // Maps team 2 description to edit panel
        
        // Team 3 (Piano) editable fields
        ["team_3_name", config.team_3_name || defaultConfig.team_3_name], // Maps team 3 name to edit panel
        ["team_3_description", config.team_3_description || defaultConfig.team_3_description] // Maps team 3 description to edit panel
    ]);
}

// Photo slideshow functionality - automatically changes slides every 3 seconds
let currentSlide = 0;
let slideInterval;

function startSlideshow() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
}

function nextSlide() {
    const slides = document.querySelectorAll('[data-slide]');
    const indicators = document.querySelectorAll('.absolute.bottom-4 button');
    
    // Hide current slide
    slides[currentSlide].style.opacity = '0';
    indicators[currentSlide].classList.remove('bg-opacity-75');
    indicators[currentSlide].classList.add('bg-opacity-50');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Show new slide
    slides[currentSlide].style.opacity = '1';
    indicators[currentSlide].classList.remove('bg-opacity-50');
    indicators[currentSlide].classList.add('bg-opacity-75');
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('[data-slide]');
    const indicators = document.querySelectorAll('.absolute.bottom-4 button');
    
    // Hide current slide
    slides[currentSlide].style.opacity = '0';
    indicators[currentSlide].classList.remove('bg-opacity-75');
    indicators[currentSlide].classList.add('bg-opacity-50');
    
    // Show selected slide
    currentSlide = slideIndex;
    slides[currentSlide].style.opacity = '1';
    indicators[currentSlide].classList.remove('bg-opacity-50');
    indicators[currentSlide].classList.add('bg-opacity-75');
    
    // Restart the automatic slideshow
    clearInterval(slideInterval);
    startSlideshow();
}

// Team page navigation - shows detailed team information in slide-out page
function showTeamPage(teamType) {
    const team = teamData[teamType]; // Get team data for specified team type
    if (!team) return; // Exit if team data not found

    const detailPage = document.getElementById('team-detail-page'); // Get detail page element
    const header = document.getElementById('team-detail-header'); // Get detail page header
    
    // Update header background to match team's color scheme (solid color)
    if (team.backgroundColor) {
        header.style.backgroundColor = team.backgroundColor;
    } else {
        header.className = `bg-gradient-to-r ${team.gradient} text-white py-16`; // Fallback to gradient
    }
    
    // Update team detail page content with team information
    document.getElementById('detail-team-name').textContent = team.name; // Set team name in header
    document.getElementById('detail-team-description').textContent = team.description; // Set team description
    
    // Update coaches
    const coachesContainer = document.getElementById('team-coaches');
    coachesContainer.innerHTML = team.coaches.map(coach => `
        <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-500">
            <div class="flex items-center">
                <div class="w-16 h-16 bg-gradient-to-br ${coach.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    ${coach.initials}
                </div>
                <div>
                    <h4 class="text-xl font-bold text-gray-800">${coach.name}</h4>
                    <p class="text-gray-600">${coach.title}</p>
                    <p class="text-sm text-gray-500 mt-1">${coach.experience}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update team members
    const membersContainer = document.getElementById('team-members');
    membersContainer.innerHTML = team.members.map(member => `
        <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                ${member.initials}
            </div>
            <h4 class="font-semibold text-gray-800">${member.name}</h4>
            <p class="text-sm text-gray-600">${member.role}</p>
        </div>
    `).join('');
    
    // Update projects
    const projectsContainer = document.getElementById('team-projects');
    projectsContainer.innerHTML = team.projects.map(project => `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center">
                <div class="text-center text-white">
                    <div class="text-6xl mb-2">${project.emoji}</div>
                    <h4 class="text-xl font-semibold">${project.title}</h4>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3">${project.title}</h3>
                <p class="text-gray-600 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Update events
    const eventsContainer = document.getElementById('team-events');
    eventsContainer.innerHTML = team.events.map(event => `
        <div class="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-500">
            <div class="flex items-start justify-between">
                <div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">${event.title}</h3>
                    <p class="text-gray-600 mb-3">${event.description}</p>
                    <div class="flex items-center text-sm text-gray-500">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        ${event.date}
                    </div>
                </div>
                <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">${event.type}</span>
            </div>
        </div>
    `).join('');
    
    // Update awards
    const awardsContainer = document.getElementById('team-awards');
    awardsContainer.innerHTML = team.awards.map(award => `
        <div class="bg-gradient-to-br ${award.gradient} p-8 rounded-2xl border ${award.border}">
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <span class="text-2xl">${award.icon}</span>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-gray-800">${award.title}</h3>
                    <p class="text-gray-600">${award.subtitle}</p>
                </div>
            </div>
            <p class="text-gray-700">${award.description}</p>
        </div>
    `).join('');
    
    // Update photo gallery if photos exist for the team
    const photosContainer = document.getElementById('team-photos');
    if (photosContainer) {
        if (team.photos && team.photos.length) {
            photosContainer.innerHTML = team.photos.map(photo => {
                // Build candidate URLs to gracefully fallback if the exact file isn't found
                const buildCandidates = (p) => {
                    const candidates = [];
                    const add = (path) => { if (path) candidates.push(path); };
                    const addWithExts = (baseNoExt) => {
                        ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].forEach(ext => add(baseNoExt + ext));
                    };
                    // Start with provided src
                    if (p.src) {
                        add(p.src);
                        addWithExts(p.src.replace(/\.(jpg|jpeg|png)$/i, ''));
                        // Also try same filename in common folders
                        const filename = p.src.split(/[\\\/]/).pop();
                        const nameNoExt = filename.replace(/\.(jpg|jpeg|png)$/i, '');
                        ['','./','images/','./images/'].forEach(prefix => addWithExts(prefix + nameNoExt));
                    }
                    // Optional explicit base name without extension
                    if (p.srcBase) {
                        ['','./','images/','./images/'].forEach(prefix => addWithExts(prefix + p.srcBase));
                    }
                    // Remove duplicates while preserving order
                    return candidates.filter((v, i, a) => a.indexOf(v) === i);
                };
                const candidates = buildCandidates(photo);
                const dataAttr = candidates.slice(1).join('|');
                const alt = photo.caption || 'Team photo';
                return `
                <div class="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                    <div class="aspect-video bg-gray-200 flex items-center justify-center">
                        <img src="${candidates[0] || ''}" alt="${alt}" class="w-full h-full object-cover" data-candidates="${dataAttr}"
                             onerror="(function(img){var rest=img.getAttribute('data-candidates')||'';if(!rest){img.onerror=null;return;}var arr=rest.split('|').filter(Boolean);if(arr.length){img.setAttribute('data-candidates', arr.slice(1).join('|'));img.src=arr[0];}else{img.onerror=null;}})(this)" />
                    </div>
                </div>`;
            }).join('');
        }
    }
    
    // Hide special sections for school clubs
    const specialSectionsContainer = document.getElementById('team-special-sections');
    specialSectionsContainer.classList.add('hidden');
    
    // Show the detail page with slide animation
    detailPage.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
}

// Closes the team detail page and returns to main teams view
function closeTeamPage() {
    const detailPage = document.getElementById('team-detail-page'); // Get detail page element
    detailPage.style.transform = 'translateX(100%)'; // Slide page off-screen to the right
    document.body.style.overflow = 'auto'; // Restore page scrolling
}
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle hamburger icon
            const icon = mobileMenuBtn.querySelector('svg');
            if (mobileMenu.classList.contains('hidden')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('svg');
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#home') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offset = 80; // Navbar height
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else if (href === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id], header[id], main[id]');
    
    function highlightActiveLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Highlight home link when at top of page
        if (scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    window.addEventListener('scroll', highlightActiveLink);
    highlightActiveLink(); // Call once on load
}

// Update navigation language text
function updateNavigationLanguage() {
    const isArabic = currentLanguage === 'ar';
    
    // Desktop navigation
    document.getElementById('nav-home-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-home-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-about-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-about-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-teams-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-teams-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-contact-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-contact-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-main-website-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-main-website-ar').style.display = isArabic ? 'inline' : 'none';
    
    // Mobile navigation
    document.getElementById('nav-home-mobile-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-home-mobile-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-about-mobile-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-about-mobile-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-teams-mobile-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-teams-mobile-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-contact-mobile-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-contact-mobile-ar').style.display = isArabic ? 'inline' : 'none';
    document.getElementById('nav-main-website-mobile-en').style.display = isArabic ? 'none' : 'inline';
    document.getElementById('nav-main-website-mobile-ar').style.display = isArabic ? 'inline' : 'none';
}

// Initialize the page with Arabic as default language
document.addEventListener('DOMContentLoaded', function() {
    // Set Arabic as default
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Start the photo slideshow
    startSlideshow();
    
    // Initialize navigation
    initNavigation();
    
    // Update language content to Arabic
    updateLanguageContent();
    
    // Update navigation language
    updateNavigationLanguage();
});

// Initialize the SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}
// Initialize the page with Arabic as default language
document.addEventListener('DOMContentLoaded', function() {
    // Set Arabic as default
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    // Start the photo slideshow
    startSlideshow();
    
      // Initialize navigation
    initNavigation();
    
    // Update language content to Arabic
    updateLanguageContent();
     // Update navigation language
    updateNavigationLanguage();
        
    // Update navigation language
    updateNavigationLanguage();
});

// Initialize the SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}










