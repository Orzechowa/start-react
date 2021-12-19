import React from 'react';
import { faqData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={faqData.title} image={faqData.image} />
    <p>{faqData.description}</p>
  </Container>
);

export default FAQ;