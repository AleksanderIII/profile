import createNextIntlPlugin from 'next-intl/plugin';
import { config } from 'dotenv';

config();

const withNextIntl = createNextIntlPlugin();

export default withNextIntl({
    images: {
        domains: ['www.udemy.com'],
    },
});
