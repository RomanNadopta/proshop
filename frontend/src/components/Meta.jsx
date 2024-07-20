import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'ProShop',
  description: 'E-commerce platform for buying and selling products',
  keywords: 'ecommerce, shopping, products',
};

export default Meta;
