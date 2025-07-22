<template>
  <div class="container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      :class="['card', card.bgClass]"
    >
      <img :src="card.img" alt="Ícone" />
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<script setup>
const cards = [
  {
    img: 'https://via.placeholder.com/40', // Troque pelo caminho real da imagem
    title: 'Imersão',
    description:
      'Já ouviu falar que você só aprende inglês morando fora, sabia que de certa forma não é mentira? Aqui na Aliança você tem aulas praticamente todo dia o que simula essa imersão no inglês.',
    bgClass: 'bg-dark',
  },
  {
    img: 'https://via.placeholder.com/40',
    title: 'Flexibilidade',
    description:
      'Você está no comando, você escolhe o horário e decide a carga horária, a gente te ajuda a ter a melhor experiência.',
    bgClass: 'bg-dark',
  },
  {
    img: 'https://via.placeholder.com/40',
    title: 'Personalizado',
    description:
      'Aqui você aprende o que você precisa, chega de curso decoreba, a Aliança personaliza a experiência para você. Temos todos os planos de estudos para você sair falando.',
    bgClass: 'bg-blue',
  },
  {
    img: 'https://via.placeholder.com/40',
    title: 'Conexão',
    description:
      'Você já ficou horas assistindo um vídeo sobre inglês pra não lembrar nada depois? Aqui você vai ter um professor particular pra tirar TODAS as suas dúvidas e deixar a experiência diferenciada.',
    bgClass: 'bg-dark',
  },
];
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background: #0a0a0a;
  padding: 20px;
  justify-content: center;
}

.card {
  color: white;
  width: 250px;
  padding: 20px;
  border-radius: 12px;
}

.card img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.card h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.card p {
  font-size: 14px;
  line-height: 1.4;
}

/* Cores */
.bg-dark {
  background-color: #16151c;
}

.bg-blue {
  background-color: #00c2ff;
  color: black;
}
</style>
