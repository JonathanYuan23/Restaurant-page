const contact = (function () {
    function init() {
        const content = document.createElement('section');
        content.id = 'contact-form';
        content.appendChild(loadForm());
        return content;
    }

    function loadContactHeader() {
        const header = document.createElement('header');
        header.id = 'contact-header';

        const contactMessage = document.createElement('h1');
        contactMessage.textContent = 'Contact form';

        header.appendChild(contactMessage);

        return header;
    }

    function loadForm() {
        const form = document.createElement('form');

        form.appendChild(loadContactHeader());
        form.appendChild(
            loadInput('input', [
                ['type', 'text'],
                ['name', 'name'],
                ['id', 'name'],
                ['placeholder', 'Name *'],
            ])
        );
        form.appendChild(
            loadInput('input', [
                ['type', 'text'],
                ['name', 'email'],
                ['id', 'email'],
                ['placeholder', 'Email *'],
            ])
        );
        form.appendChild(
            loadInput('textarea', [
                ['name', 'message'],
                ['id', 'message'],
                ['placeholder', 'Write your message here...'],
            ])
        );
        form.appendChild(
            loadInput('input', [
                ['type', 'submit'],
                ['value', 'Submit'],
            ])
        );
        return form;
    }

    function loadInput(type, attrs) {
        const input = document.createElement(`${type}`);
        for (let i = 0; i < attrs.length; i++) {
            input.setAttribute(`${attrs[i][0]}`, `${attrs[i][1]}`);
        }
        return input;
    }

    return {
        init
    }
})();

export { contact };
