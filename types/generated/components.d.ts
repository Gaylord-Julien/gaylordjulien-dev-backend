import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    keywords: Schema.Attribute.Text;
    metaRobots: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
    metaViewport: Schema.Attribute.String;
    canonicalURL: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface HomepageTrust extends Struct.ComponentSchema {
  collectionName: 'components_homepage_trusts';
  info: {
    displayName: 'trust';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    website: Schema.Attribute.String;
    screenshot: Schema.Attribute.Media<'images', true>;
    description: Schema.Attribute.Blocks;
  };
}

export interface HomepageIntro extends Struct.ComponentSchema {
  collectionName: 'components_homepage_intros';
  info: {
    displayName: 'intro';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.Text;
  };
}

export interface HomepageHeader extends Struct.ComponentSchema {
  collectionName: 'components_homepage_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'homepage.trust': HomepageTrust;
      'homepage.intro': HomepageIntro;
      'homepage.header': HomepageHeader;
    }
  }
}
