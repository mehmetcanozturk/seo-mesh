import type { Meta, StoryObj } from '@storybook/react';
import { Recipe, Person, AggregateRating } from '@seo-mesh/react';
import { SchemaStory } from '../SchemaStory';

const meta: Meta = { title: 'Schemas/Recipe' };
export default meta;

export const TemelTarif: StoryObj = {
  name: 'Recipe',
  render: () => (
    <SchemaStory
      title="Recipe"
      description="Tarif şeması. Google'da tarif karuselinde görünür. recipeIngredient ve recipeInstructions zorunludur."
      source={`<Recipe
  name="Klasik Çikolatalı Kek"
  description="Kolay ve lezzetli çikolatalı kek tarifi."
  prepTime="PT20M"
  cookTime="PT40M"
  totalTime="PT60M"
  recipeYield="8 dilim"
  recipeCategory="Tatlı"
  recipeCuisine="Türk"
  keywords="kek, çikolata, kolay tarif"
  recipeIngredient={["2 su bardağı un", "1 su bardağı şeker", "3 yumurta", "200g çikolata"]}
  recipeInstructions={["Fırını 180°C'ye ısıtın.", "Malzemeleri karıştırın.", "40 dakika pişirin."]}
>
  <Person prop="author" name="Ayşe Hanım" />
  <AggregateRating prop="aggregateRating" ratingValue={4.9} reviewCount={2847} bestRating={5} />
</Recipe>`}
    >
      <Recipe
        name="Klasik Çikolatalı Kek"
        description="Kolay ve lezzetli çikolatalı kek tarifi."
        prepTime="PT20M"
        cookTime="PT40M"
        totalTime="PT60M"
        recipeYield="8 dilim"
        recipeCategory="Tatlı"
        recipeCuisine="Türk"
        keywords="kek, çikolata, kolay tarif"
        recipeIngredient={['2 su bardağı un', '1 su bardağı şeker', '3 yumurta', '200g çikolata']}
        recipeInstructions={['Fırını 180°C\'ye ısıtın.', 'Malzemeleri karıştırın.', '40 dakika pişirin.']}
      >
        <Person prop="author" name="Ayşe Hanım" />
        <AggregateRating prop="aggregateRating" ratingValue={4.9} reviewCount={2847} bestRating={5} />
      </Recipe>
      <div className="product-card">
        <h2>Klasik Çikolatalı Kek</h2>
        <p>Kolay ve lezzetli çikolatalı kek tarifi.</p>
        <div className="stars">★★★★★ <span style={{ color: '#888', fontSize: '0.85rem' }}>4.9 (2.847 değerlendirme)</span></div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <span className="meta">⏱ Hazırlık: 20 dk</span>
          <span className="meta">🔥 Pişirme: 40 dk</span>
          <span className="meta">🍰 8 dilim</span>
        </div>
        <div className="badge" style={{ marginTop: '0.75rem' }}>Tatlı · Türk Mutfağı</div>
      </div>
    </SchemaStory>
  ),
};
