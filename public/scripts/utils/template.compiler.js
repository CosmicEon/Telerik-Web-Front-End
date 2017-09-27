import Handlebars from 'handlebars';
import { get as getTemplate } from 'requester';

const cachedTemplates = {};

function loadTemplate(templateName) {
    return new Promise((resolve, reject) => {
        if (cachedTemplates[templateName]) {
            return Promise.resolve(cachedTemplates[templateName]);
        }

        const url = `templates/${templateName}.hbs`;

        return getTemplate(url)
            .then((template) => {
                const compiledTemplate = Handlebars.compile(template);
                cachedTemplates[compiledTemplate] = compiledTemplate;
                return Promise.resolve(compiledTemplate);
            });
    });
}

export { loadTemplate };
