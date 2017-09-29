import Handlebars from 'handlebars';
import { get as getTemplate } from 'requester';

const cachedTemplates = {};

function tamplateLoader(templateName) {
    return new Promise((resolve, reject) => {
        if (cachedTemplates[templateName]) {
            return resolve(cachedTemplates[templateName]);
        }
        const url = `views/${templateName}.hbs`;

        return getTemplate(url)
            .then((template) => {
                const compiledTemplate = Handlebars.compile(template);
                cachedTemplates[compiledTemplate] = compiledTemplate;
                return resolve(compiledTemplate());
            });
    });
}

export { tamplateLoader };
