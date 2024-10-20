import type { Struct, Schema } from '@strapi/strapi';

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
      'homepage.intro': HomepageIntro;
      'homepage.header': HomepageHeader;
    }
  }
}
