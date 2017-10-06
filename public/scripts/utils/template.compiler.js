import Handlebars from 'handlebars';
import { get as getTemplate } from 'requester';

Handlebars.registerHelper('ifCategory', (item, category, subcategory, options) => {
    if (item.category === category && item.subcategory !== subcategory) {
        return options.fn(this);
    } else {
        return options.fn(this);
    }
});

const cachedTemplates = {};

function templateLoader(templateName) {
    return new Promise((resolve, reject) => {
        if (cachedTemplates[templateName]) {
            return resolve(cachedTemplates[templateName]);
        }
        const url = `views/${templateName}.hbs`;

        return getTemplate(url)
            .then((template) => {
                const compiledTemplate = Handlebars.compile(template);
                cachedTemplates[compiledTemplate] = compiledTemplate;
                return resolve(compiledTemplate);
            });
    });
}

export { templateLoader };
