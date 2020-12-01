/**
 * ------------------------------------------------------------------------
 * Footnotes
 * ------------------------------------------------------------------------
 */


const Footnotes = {
    init: function() {
        const footnoteItems = document.querySelectorAll('a[data-toggle="tooltip"]');
        if ( footnoteItems.length === 0 ) {
            return;
        }
        console.log(footnoteItems);
        this.setupFootnoteContainer();
        footnoteItems.forEach(element => {
            element.addEventListener('click', this.eventHandler);
        });
    },

    eventHandler: function(e) {
        e.preventDefault();
        console.log(e.target.getAttribute('href'));
        const selectedFootnoteContent = document.querySelector( e.target.getAttribute('href') ).innerHTML;
        const footnoteArea = document.querySelector('#footnote-area');
        const footnoteContent = document.querySelector('#footnote-content');
        console.log(selectedFootnoteContent);
        footnoteContent.innerHTML = selectedFootnoteContent;
        console.log(footnoteContent);
        footnoteArea.classList.add('show');
    },

    setupFootnoteContainer: function() {
        const footnoteArea = document.createElement('div');
        const footnoteContainer = document.createElement('div');
        const footnoteContent = document.createElement('div');
        const footnoteCloseBtn = document.createElement('button');

        footnoteCloseBtn.id = 'footnote-close';
        footnoteCloseBtn.classList.add('footnote-close', 'btn-close');
        footnoteCloseBtn.setAttribute('aria-label', 'close');

        footnoteArea.classList.add('footnote-area');
        footnoteArea.id = 'footnote-area';

        footnoteContainer.classList.add('footnote-container');
        footnoteContainer.classList.add('container');

        footnoteContent.id = 'footnote-content';
        footnoteContent.classList.add('footnote-content');

        footnoteCloseBtn.addEventListener('click', function() {
            this.parentElement.parentElement.classList.remove('show')
        });

        footnoteContainer.append(footnoteCloseBtn);
        footnoteContainer.append(footnoteContent);
        footnoteArea.append(footnoteContainer);
        document.body.append(footnoteArea);
    }
};


// init module
Footnotes.init();