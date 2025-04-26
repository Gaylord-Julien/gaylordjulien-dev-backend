module.exports = ({env}) => ({
    upload: {
        config: {
            provider: "aws-s3",
            providerOptions: {
                baseUrl: env("MINIO_PUBLIC_ENDPOINT"),
                s3Options: {
                    credentials: {
                        accessKeyId: env("MINIO_ROOT_USER"),
                        secretAccessKey: env("MINIO_ROOT_PASSWORD"),
                    },
                    endpoint: env("MINIO_PRIVATE_ENDPOINT"),
                    region: env("MINIO_REGION"),
                    forcePathStyle: true,
                    params: {
                        Bucket: env("MINIO_BUCKET"),
                    },
                },
            },
        },
    },
    seo: {
        enabled: true,
    },
    "strapi-plugin-placeholder": {
        enabled: true,
        resolve: "./node_modules/strapi-plugin-placeholder",
        config: {
            endpoint: env("MINIO_ENDPOINT"),
            accessKey: env("MINIO_ACCESS_KEY"),
            secretKey: env("MINIO_SECRET_KEY"),
            bucket: env("MINIO_BUCKET"),
            forcePathStyle: true,
        },
    },
});
