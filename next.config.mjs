import createNextIntlPlugin from 'next-intl/plugin';

require('dotenv').config();
const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
    images: {
        domains: ['www.udemy.com'],
    },
});
