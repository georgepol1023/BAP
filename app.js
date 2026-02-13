// Greek Bible PWA - Main Application Logic

class GreekBibleApp {
    constructor() {
        this.currentTestament = 'old';
        this.currentBook = null;
        this.currentChapter = null;
        this.fontSize = 16;
        this.init();
    }

    init() {
        // Load saved preferences
        this.loadPreferences();
        
        // Initialize views
        this.initializeEventListeners();
        
        // Show book list after loading
        setTimeout(() => {
            this.hideLoading();
            this.showBookList();
            this.checkInstallPrompt();
        }, 1500);
    }

    loadPreferences() {
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            this.fontSize = parseInt(savedFontSize);
        }
    }

    savePreferences() {
        localStorage.setItem('fontSize', this.fontSize);
    }

    initializeEventListeners() {
        // Testament tabs
        document.getElementById('old-testament-tab').addEventListener('click', () => {
            this.switchTestament('old');
        });
        
        document.getElementById('new-testament-tab').addEventListener('click', () => {
            this.switchTestament('new');
        });

        // Navigation buttons
        document.getElementById('back-to-books').addEventListener('click', () => {
            this.showBookList();
        });

        document.getElementById('back-to-chapters').addEventListener('click', () => {
            this.showChapterList(this.currentBook);
        });

        // Settings
        document.getElementById('settings-btn').addEventListener('click', () => {
            this.showSettings();
        });

        document.getElementById('chapter-settings-btn').addEventListener('click', () => {
            this.showSettings();
        });

        document.getElementById('close-settings').addEventListener('click', () => {
            this.hideSettings();
        });

        // Font size control
        const fontSizeSlider = document.getElementById('font-size');
        fontSizeSlider.value = this.fontSize;
        fontSizeSlider.addEventListener('input', (e) => {
            this.updateFontSize(parseInt(e.target.value));
        });

        // Chapter navigation
        document.getElementById('prev-chapter').addEventListener('click', () => {
            this.navigateChapter(-1);
        });

        document.getElementById('next-chapter').addEventListener('click', () => {
            this.navigateChapter(1);
        });

        // Install banner
        document.getElementById('dismiss-banner').addEventListener('click', () => {
            document.getElementById('install-banner').style.display = 'none';
            localStorage.setItem('installBannerDismissed', 'true');
        });

        // Close modal on backdrop click
        document.getElementById('settings-modal').addEventListener('click', (e) => {
            if (e.target.id === 'settings-modal') {
                this.hideSettings();
            }
        });
    }

    hideLoading() {
        document.getElementById('loading-screen').style.display = 'none';
    }

    switchTestament(testament) {
        this.currentTestament = testament;
        
        // Update tabs
        const oldTab = document.getElementById('old-testament-tab');
        const newTab = document.getElementById('new-testament-tab');
        
        if (testament === 'old') {
            oldTab.classList.add('active');
            newTab.classList.remove('active');
        } else {
            newTab.classList.add('active');
            oldTab.classList.remove('active');
        }
        
        this.renderBookList();
    }

    showBookList() {
        this.hideAllViews();
        document.getElementById('book-list-view').style.display = 'flex';
        this.renderBookList();
    }

    renderBookList() {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';
        
        const books = this.currentTestament === 'old' 
            ? BOOK_LIST.oldTestament 
            : BOOK_LIST.newTestament;
        
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.innerHTML = `
                <span class="book-name">${book.name}</span>
                <span class="book-meta">${book.chapters} κεφ.</span>
            `;
            bookItem.addEventListener('click', () => {
                this.showChapterList(book);
            });
            bookList.appendChild(bookItem);
        });
    }

    showChapterList(book) {
        this.currentBook = book;
        this.hideAllViews();
        
        document.getElementById('chapter-list-view').style.display = 'flex';
        document.getElementById('book-title').textContent = book.name;
        
        const chapterList = document.getElementById('chapter-list');
        chapterList.innerHTML = '';
        
        for (let i = 1; i <= book.chapters; i++) {
            const chapterItem = document.createElement('button');
            chapterItem.className = 'chapter-item';
            chapterItem.textContent = i;
            chapterItem.addEventListener('click', () => {
                this.showChapter(book, i);
            });
            chapterList.appendChild(chapterItem);
        }
    }

    showChapter(book, chapterNumber) {
        this.currentBook = book;
        this.currentChapter = chapterNumber;
        
        this.hideAllViews();
        document.getElementById('chapter-view').style.display = 'flex';
        
        // Update title
        document.getElementById('chapter-title').textContent = `${book.name} ${chapterNumber}`;
        
        // Get chapter data
        const testament = this.currentTestament === 'old' ? 'oldTestament' : 'newTestament';
        const bookData = BIBLE_DATA[testament].find(b => b.id === book.id);
        
        if (bookData) {
            const chapterData = bookData.chapters.find(c => c.number === chapterNumber);
            if (chapterData) {
                this.renderChapter(book, chapterNumber, chapterData);
            } else {
                // Chapter not yet added to data
                this.renderPlaceholderChapter(book, chapterNumber);
            }
        } else {
            // Book not yet added to data
            this.renderPlaceholderChapter(book, chapterNumber);
        }
        
        // Update navigation buttons
        this.updateChapterNavigation();
        
        // Scroll to top
        document.getElementById('chapter-content').scrollTop = 0;
    }

    renderChapter(book, chapterNumber, chapterData) {
        const content = document.getElementById('chapter-content');
        content.innerHTML = `
            <div class="chapter-header">
                <h2>${book.name}</h2>
                <h1>Κεφάλαιο ${chapterNumber}</h1>
            </div>
        `;
        
        chapterData.verses.forEach(verse => {
            const verseDiv = document.createElement('div');
            verseDiv.className = 'verse-container';
            verseDiv.innerHTML = `
                <span class="verse-number">${verse.number}</span>
                <span class="verse-text" style="font-size: ${this.fontSize}px">${verse.text}</span>
            `;
            content.appendChild(verseDiv);
        });
    }

    renderPlaceholderChapter(book, chapterNumber) {
        const content = document.getElementById('chapter-content');
        content.innerHTML = `
            <div class="chapter-header">
                <h2>${book.name}</h2>
                <h1>Κεφάλαιο ${chapterNumber}</h1>
            </div>
            <div class="verse-container">
                <span class="verse-number">...</span>
                <span class="verse-text" style="font-size: ${this.fontSize}px">
                    Το κείμενο αυτού του κεφαλαίου θα προστεθεί σύντομα. 
                    Η εφαρμογή περιλαμβάνει τη δομή όλων των 66 βιβλίων της Βίβλου.
                    <br><br>
                    Για να προσθέσετε το πλήρες κείμενο, ανατρέξτε στις οδηγίες στο αρχείο README.
                </span>
            </div>
        `;
    }

    updateChapterNavigation() {
        const prevBtn = document.getElementById('prev-chapter');
        const nextBtn = document.getElementById('next-chapter');
        
        // Check if there's a previous chapter
        prevBtn.disabled = this.currentChapter <= 1;
        
        // Check if there's a next chapter
        nextBtn.disabled = this.currentChapter >= this.currentBook.chapters;
    }

    navigateChapter(direction) {
        const newChapter = this.currentChapter + direction;
        if (newChapter >= 1 && newChapter <= this.currentBook.chapters) {
            this.showChapter(this.currentBook, newChapter);
        }
    }

    showSettings() {
        document.getElementById('settings-modal').style.display = 'flex';
        document.getElementById('font-size').value = this.fontSize;
        document.getElementById('font-size-value').textContent = `${this.fontSize}px`;
        document.getElementById('sample-text').style.fontSize = `${this.fontSize}px`;
    }

    hideSettings() {
        document.getElementById('settings-modal').style.display = 'none';
    }

    updateFontSize(size) {
        this.fontSize = size;
        document.getElementById('font-size-value').textContent = `${size}px`;
        document.getElementById('sample-text').style.fontSize = `${size}px`;
        
        // Update all verse texts
        document.querySelectorAll('.verse-text').forEach(el => {
            el.style.fontSize = `${size}px`;
        });
        
        this.savePreferences();
    }

    hideAllViews() {
        document.querySelectorAll('.view').forEach(view => {
            view.style.display = 'none';
        });
    }

    checkInstallPrompt() {
        // Check if app is already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            return; // App is installed
        }
        
        // Check if banner was dismissed
        if (localStorage.getItem('installBannerDismissed')) {
            return;
        }
        
        // Show install banner for iOS users
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator.standalone);
        
        if (isIOS && !isInStandaloneMode) {
            setTimeout(() => {
                document.getElementById('install-banner').style.display = 'block';
            }, 3000);
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.bibleApp = new GreekBibleApp();
});
