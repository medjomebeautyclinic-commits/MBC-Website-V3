# Medjome Beauty Clinic — site Vercel

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:3000`.

## Déploiement Vercel

1. Importer ce dossier dans un dépôt GitHub, puis l’importer dans Vercel.
2. Laisser Vercel détecter **Next.js** ; aucune commande spéciale n’est nécessaire.
3. Ajouter ensuite les variables pour Supabase, OpenAI, Google Analytics et les pixels lorsque les intégrations serveur seront activées.

## À raccorder avant mise en ligne commerciale

- Prix définitifs, horaires, adresse exacte, e-mail et Google Maps.
- Vraies photos, vidéos, avis et promotions MBC avec autorisation.
- Supabase : tables `services`, `appointments`, `leads`, `reviews`, `offers`, `gallery`.
- API OpenAI sécurisée côté serveur pour l’assistant et classification des prospects.
- GA4, Meta Pixel, TikTok Pixel, Search Console et Google Business Profile.

Le numéro WhatsApp utilisé est `+229 69 48 69 75`.
