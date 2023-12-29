/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json; charset=utf-8'
                    }
                ]
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**'
            }
        ]
    }
}
