import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCallToAction extends Struct.ComponentSchema {
  collectionName: 'components_sections_call_to_actions';
  info: {
    displayName: 'callToAction';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    faqList: Schema.Attribute.Component<'ui.faq-card', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'feature';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    featureList: Schema.Attribute.Component<'ui.card', true>;
  };
}

export interface SectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    actions: Schema.Attribute.Component<'ui.button', true>;
    cover: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLogoClouds extends Struct.ComponentSchema {
  collectionName: 'components_sections_logo_clouds';
  info: {
    displayName: 'logoCloud';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    gallery: Schema.Attribute.Media<'images', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_sections_newsletters';
  info: {
    displayName: 'newsletter';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['Subscribe', 'Unsubscribe']>;
  };
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: 'components_sections_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    teamList: Schema.Attribute.Component<'ui.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['Primary']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Primary'>;
  };
}

export interface UiCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    excerpt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_faq_cards';
  info: {
    displayName: 'faqCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.call-to-action': SectionsCallToAction;
      'sections.faq': SectionsFaq;
      'sections.feature': SectionsFeature;
      'sections.header': SectionsHeader;
      'sections.hero': SectionsHero;
      'sections.logo-clouds': SectionsLogoClouds;
      'sections.newsletter': SectionsNewsletter;
      'sections.team': SectionsTeam;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'ui.button': UiButton;
      'ui.card': UiCard;
      'ui.faq-card': UiFaqCard;
    }
  }
}
