import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
    images: {
        domains: ['www.udemy.com'],
    },
});
