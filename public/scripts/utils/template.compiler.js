import Handlebars from 'handlebars';
import { get as getTemplate } from 'requester';

const tamplateLoader = () => {
    const cachedTemplates = {};
    console.log('template.compiler.js');

    function load(templateName) {
        return new Promise((resolve, reject) => {
            if (cachedTemplates[templateName]) {
                return Promise.resolve(cachedTemplates[templateName]);
            }
            const url = `views/${templateName}.hbs`;

            return getTemplate(url)
                .then((template) => {
                    const compiledTemplate = Handlebars.compile(template);
                    cachedTemplates[compiledTemplate] = compiledTemplate;
                    console.log(compiledTemplate());
                    return Promise.resolve(compiledTemplate());
                });
        });
    }
    return { load };
};

export { tamplateLoader };
