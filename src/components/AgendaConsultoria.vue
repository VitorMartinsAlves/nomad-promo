<template>
    <section id="agenda-consultoria"
        style="padding: 20px; max-width: 800px; margin: 0 auto; line-height: 1.6; color: #333;">
        <h2 style="font-size: 2em; color: #0056b3; margin-bottom: 15px;">A Importância da Consultoria de Intercâmbio
        </h2>
        <p style="margin-bottom: 15px;">O serviço de consultoria de intercâmbio garante segurança, orientação
            especializada e economia de tempo para quem deseja estudar no exterior.</p>

        <h3 style="font-size: 1.5em; color: #0056b3; margin-top: 25px; margin-bottom: 10px;">A consutoria inclui:
        </h3>
        <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 20px;">
            <li style="margin-bottom: 8px;"><strong>Planejamento personalizado:</strong> Escolha do destino, curso e
                escola com base no seu perfil, objetivos e orçamento.</li>
            <li style="margin-bottom: 8px;"><strong>Auxílio com documentação e visto:</strong> Evita erros e aumenta as
                chances de aprovação com orientação especializada.</li>
            <li style="margin-bottom: 8px;"><strong>Suporte completo:</strong> Ajuda com hospedagem, seguro, passagens e
                demais detalhes logísticos.</li>
            <li style="margin-bottom: 8px;"><strong>Acompanhamento contínuo:</strong> Suporte antes, durante e após o
                intercâmbio, inclusive em emergências.</li>
            <li style="margin-bottom: 8px;"><strong>Credibilidade e parcerias:</strong> Acesso a escolas reconhecidas,
                informações atualizadas e condições exclusivas.</li>
            <li style="margin-bottom: 8px;"><strong>Otimização do investimento:</strong> Decisões mais seguras e
                eficazes para aproveitar ao máximo a experiência.</li>
            <li style="margin-bottom: 8px;"><strong>Pagamento flexível:</strong> Te ajudamos a planejar o pagamento de forma personalizada em condições negociáveis.</li>
        </ul>

        <p style="margin-bottom: 20px;">Agende agora mesmo sua consultoria e comece a transformar seus planos em
            realidade!</p>

        <!-- <h3 style="font-size: 1.5em; color: #0056b3; margin-top: 25px; margin-bottom: 10px;">Agenda Eletrônica</h3>
    <p style="margin-bottom: 10px;">Para agendar sua consultoria online, clique no link abaixo ou escaneie o QR Code:</p>
    <p style="text-align: center; margin-bottom: 20px;">
      <a :href="agendaOnlineLink" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 10px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Agenda Online - Agende aqui!
      </a>
    </p>
    <p style="text-align: center;">
      <strong>QR Code para agendamento online:</strong> [Insira a imagem do QR Code aqui, gerada a partir do link da agenda, ou uma instrução para o usuário escaneá-lo]
    </p>
    <p style="font-size: 0.9em; color: #666; text-align: center; margin-top: 10px;">
      <em>(Lembre-se de substituir o texto do QR Code pela imagem real após gerá-la.)</em>
    </p> -->

        <h3 style="font-size: 1.5em; color: #0056b3; margin-top: 40px; margin-bottom: 10px;">Selecione um Dia e Horário
        </h3>
        <div
            style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <button @click="prevMonth"
                    style="background-color: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;">&lt;</button>
                <h4 style="margin: 0; color: #0056b3;">{{ currentMonthYear }}</h4>
                <button @click="nextMonth"
                    style="background-color: #007bff; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer;">&gt;</button>
            </div>

            <div
                style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; font-weight: bold; margin-bottom: 10px; color: #555;">
                <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 5px;">
                <div v-for="blank in startDayOffset" :key="'blank-' + blank" style="padding: 10px;"></div>
                <div v-for="day in daysInMonth" :key="day" :class="{
                    'calendar-day': true,
                    'today': isToday(day),
                    'has-slots': daysWithAvailability[currentMonthMoment.clone().date(day).format('YYYY-MM-DD')],
                    'selected-day': selectedDate && selectedDate.date() === day && selectedDate.month() === currentMonthMoment.month() && selectedDate.year() === currentMonthMoment.year(),
                    'disabled-day': !isDaySelectable(day)
                }" @click="selectDay(day)" :style="{
                    padding: '10px',
                    border: '1px solid #eee',
                    borderRadius: '4px',
                    cursor: isDaySelectable(day) ? 'pointer' : 'not-allowed',
                    backgroundColor: getDayBackgroundColor(day),
                    fontWeight: daysWithAvailability[currentMonthMoment.clone().date(day).format('YYYY-MM-DD')] ? 'bold' : 'normal',
                    boxShadow: (selectedDate && selectedDate.date() === day && selectedDate.month() === currentMonthMoment.month() && selectedDate.year() === currentMonthMoment.year()) ? '0 0 0 2px #007bff' : 'none',
                    opacity: isDaySelectable(day) ? 1 : 0.5
                }">
                    {{ day }}
                </div>
            </div>
        </div>

        <div v-if="selectedDate"
            style="margin-top: 30px; background-color: #f0f8ff; border-radius: 8px; padding: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h4 style="color: #0056b3; margin-bottom: 15px;">Horários Disponíveis para {{
                formatSelectedDate(selectedDate) }}</h4>
            <p v-if="loadingSlots" style="margin-top: 10px; color: #555;">Carregando horários para este dia...</p>
            <p v-if="errorSlots" style="margin-top: 10px; color: red;">Erro ao carregar horários: {{ errorSlots }}</p>

            <div v-if="!loadingSlots && !isDaySelectable(selectedDate.date())"
                style="color: #d9534f; font-weight: bold; text-align: center; margin-top: 15px;">
                Este dia não pode ser agendado. Agendamentos devem ser feitos com no mínimo um dia de antecedência.
            </div>
            <div v-else-if="!loadingSlots && filteredHourlySlots.length > 0"
                style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px;">
                <button v-for="slotHour in filteredHourlySlots" :key="slotHour.hora" @click="selectSlot(slotHour.hora)"
                    :class="{ 'time-slot-button': true, 'selected-slot': form.selectedHour === slotHour.hora }" :style="{
                        padding: '10px',
                        border: '1px solid #007bff',
                        borderRadius: '5px',
                        backgroundColor: (form.selectedHour === slotHour.hora) ? '#007bff' : 'white',
                        color: (form.selectedHour === slotHour.hora) ? 'white' : '#007bff',
                        cursor: 'pointer',
                        fontSize: '1em',
                        fontWeight: 'bold'
                    }">
                    {{ slotHour.hora }}:00
                </button>
            </div>
            <p v-else-if="!loadingSlots" style="color: #666; text-align: center;">Não há horários disponíveis para este
                dia.</p>
        </div>


        <h3 style="font-size: 1.5em; color: #0056b3; margin-top: 40px; margin-bottom: 10px;">Preencha para Agendar</h3>
        <form id="form_set" @submit.prevent="submitAppointment" style="display: flex; flex-direction: column; gap: 15px;">
            <div style="display: flex; flex-direction: column;">
                <label for="name" style="margin-bottom: 5px; font-weight: bold;">Nome:</label>
                <input type="text" id="name" v-model="form.nome" required
                    style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <label for="email" style="margin-bottom: 5px; font-weight: bold;">Email:</label>
                <input type="email" id="email" v-model="form.email" required
                    style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <label for="idade" style="margin-bottom: 5px; font-weight: bold;">Idade:</label>
                <input type="number" id="idade" v-model="form.idade" required
                    style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <label for="motivo" style="margin-bottom: 5px; font-weight: bold;">Motivo do intercâmbio:</label>
                <input type="text" id="motivo" v-model="form.motivo" required
                    style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            </div>
            <div style="display: flex; flex-direction: column;">
                <label style="margin-bottom: 5px; font-weight: bold;">Horário Selecionado:</label>
                <p v-if="selectedDate && form.selectedHour !== null" style="font-weight: bold; color: #007bff;">
                    {{ formatSelectedDate(selectedDate) }} às {{ form.selectedHour }}:00
                </p>
                <p v-else style="color: #888;">Nenhum dia ou horário selecionado. Por favor, escolha no calendário
                    acima.</p>
            </div>
            <button type="submit"
                :disabled="!selectedDate || form.selectedHour === null || !isDaySelectable(selectedDate.date())"
                style="padding: 10px 15px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1.1em; opacity: 1; transition: opacity 0.3s;"
                :style="{ opacity: (!selectedDate || form.selectedHour === null || !isDaySelectable(selectedDate.date())) ? 0.6 : 1, cursor: (!selectedDate || form.selectedHour === null || !isDaySelectable(selectedDate.date())) ? 'not-allowed' : 'pointer' }">
                Agendar Agora
            </button>
            <p v-if="submissionMessage" :style="{ color: submissionSuccess ? 'green' : 'red', marginTop: '15px' }">{{
                submissionMessage }}</p>

            <div v-if="jitsiLink"
                style="margin-top: 20px; padding: 15px; border: 1px solid #007bff; border-radius: 8px; background-color: #e6f0ff;">
                <p style="font-weight: bold; color: #0056b3; margin-bottom: 10px;">Link da Reunião (Jitsi Meet):</p>
                <a :href="jitsiLink" target="_blank" rel="noopener noreferrer" @click.prevent="copyJitsiLink"
                    style="display: block; word-break: break-all; color: #007bff; text-decoration: underline; cursor: pointer;">
                    {{ jitsiLink }}
                </a>
                <p v-if="copyMessage" style="color: green; font-size: 0.9em; margin-top: 5px;">{{ copyMessage }}</p>
                <p style="font-size: 0.9em; color: #666; margin-top: 5px;">Clique no link acima para copiar!</p>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import moment from 'moment';

const availableHourlySlotsForSelectedDay = ref([]);
const daysWithAvailability = ref({});
const loadingSlots = ref(false);
const errorSlots = ref(null);

const currentMonthMoment = ref(moment().startOf('month'));
const selectedDate = ref(null);
const todayMoment = moment().startOf('day');

const form = ref({
    nome: '',
    email: '',
    idade: '',
    motivo: '',
    selectedHour: null,
});

const submissionMessage = ref('');
const submissionSuccess = ref(false);
const jitsiLink = ref(null); // Changed from meetLink to jitsiLink
const copyMessage = ref('');

const backendBaseUrl = 'https://martinsdev.discloud.app';

const currentMonthYear = computed(() => {
    const date = currentMonthMoment.value.toDate() // converte moment para Date
    return new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })
        .format(date)
        .replace(/^./, str => str.toUpperCase()) // capitaliza a primeira letra
})
const daysInMonth = computed(() => currentMonthMoment.value.daysInMonth());
const startDayOffset = computed(() => currentMonthMoment.value.day());

const filteredHourlySlots = computed(() => {
    return availableHourlySlotsForSelectedDay.value.filter(slot => slot.disponivel);
});

const isToday = (day) => {
    const checkDate = currentMonthMoment.value.clone().date(day).startOf('day');
    return checkDate.isSame(todayMoment, 'day');
};

const isDaySelectable = (day) => {
    const checkDate = currentMonthMoment.value.clone().date(day).startOf('day');
    const minimumSelectableDate = moment().add(1, 'day').startOf('day');

    return checkDate.isAfter(minimumSelectableDate, 'day');
};

const getDayBackgroundColor = (day) => {
    const formattedDate = currentMonthMoment.value.clone().date(day).format('YYYY-MM-DD');
    if (isToday(day)) {
        return '#FFF9C4';
    } else if (!isDaySelectable(day)) {
        return '#E0E0E0';
    } else if (daysWithAvailability.value[formattedDate]) {
        return '#E6FFE6';
    }
    return '#f0f0f0';
};

const fetchMonthAvailability = async (monthMoment) => {
    loadingSlots.value = true;
    errorSlots.value = null;
    daysWithAvailability.value = {};

    const promises = [];
    const startDay = monthMoment.clone().startOf('month');
    const endDay = monthMoment.clone().endOf('month');

    let currentDay = startDay.clone();
    while (currentDay.isSameOrBefore(endDay, 'day')) {
        const formattedDate = currentDay.format('YYYY-MM-DD');
        promises.push(
            axios.get(`${backendBaseUrl}/disponibilidade/${formattedDate}`)
                .then(response => {
                    const hasAnyAvailable = response.data.some(slot => slot.disponivel);
                    if (hasAnyAvailable) {
                        daysWithAvailability.value[formattedDate] = true;
                    }
                })
                .catch(error => {
                    console.error(`Erro ao buscar disponibilidade para ${formattedDate}:`, error.message);
                })
        );
        currentDay.add(1, 'day');
    }

    try {
        await Promise.all(promises);
    } catch (err) {
        errorSlots.value = 'Não foi possível carregar a disponibilidade do mês. Tente novamente.';
    } finally {
        loadingSlots.value = false;
    }
};

const fetchHourlyAvailabilityForDay = async (dateMoment) => {
    loadingSlots.value = true;
    errorSlots.value = null;
    availableHourlySlotsForSelectedDay.value = [];

    const formattedDate = dateMoment.format('YYYY-MM-DD');
    try {
        const response = await axios.get(`${backendBaseUrl}/disponibilidade/${formattedDate}`);
        availableHourlySlotsForSelectedDay.value = response.data;
    } catch (error) {
        console.error('Erro ao buscar horários para o dia:', error);
        //errorSlots.value = 'Não foi possível carregar os horários para este dia. Verifique o backend.';
    } finally {
        loadingSlots.value = false;
    }
};

const selectDay = async (day) => {
    const newSelectedDate = currentMonthMoment.value.clone().date(day);

    if (!isDaySelectable(day)) {
        selectedDate.value = newSelectedDate;
        form.value.selectedHour = null;
        availableHourlySlotsForSelectedDay.value = [];
        return;
    }

    selectedDate.value = newSelectedDate;
    form.value.selectedHour = null;

    await fetchHourlyAvailabilityForDay(newSelectedDate);
};

const selectSlot = (hour) => {
    form.value.selectedHour = hour;
};

const prevMonth = () => {
    currentMonthMoment.value = currentMonthMoment.value.clone().subtract(1, 'month');
    selectedDate.value = null;
    form.value.selectedHour = null;
    fetchMonthAvailability(currentMonthMoment.value);
};

const nextMonth = () => {
    currentMonthMoment.value = currentMonthMoment.value.clone().add(1, 'month');
    selectedDate.value = null;
    form.value.selectedHour = null;
    fetchMonthAvailability(currentMonthMoment.value);
};

const submitAppointment = async () => {
    if (!selectedDate.value || form.value.selectedHour === null || !isDaySelectable(selectedDate.value.date())) {
        submissionSuccess.value = false;
        submissionMessage.value = 'Por favor, selecione um dia e um horário válidos no calendário.';
        jitsiLink.value = null; // Clear Jitsi link on error
        return;
    }

    submissionMessage.value = '';
    submissionSuccess.value = false;
    jitsiLink.value = null; // Clear Jitsi link before new submission
    copyMessage.value = '';

    const payload = {
        nome: form.value.nome,
        email: form.value.email,
        idade: form.value.idade,
        motivo: form.value.motivo, // Added motivo to payload
        data: selectedDate.value.format('YYYY-MM-DD'),
        hora: form.value.selectedHour
    };

    try {
        const response = await axios.post(`${backendBaseUrl}/agendar`, payload);

        console.log('Resposta do backend para o frontend:', response.data);

        submissionSuccess.value = true;
        submissionMessage.value = 'Agendamento realizado com sucesso! Você receberá uma confirmação por e-mail.';
        jitsiLink.value = response.data.jitsiLink; // Changed from meetLink to jitsiLink

        console.log('Valor do jitsiLink no frontend após atribuição:', jitsiLink.value);

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // rolagem suave
        });

        form.value = {
            nome: '',
            email: '',
            idade: '',
            motivo: '',
            selectedHour: null,
        };
        await fetchMonthAvailability(currentMonthMoment.value);
        if (selectedDate.value && selectedDate.value.format('YYYY-MM-DD') === payload.data) {
            await fetchHourlyAvailabilityForDay(selectedDate.value);
        }

    } catch (error) {
        console.error('Erro ao agendar:', error.response ? error.response.data : error.message);
        submissionSuccess.value = false;
        submissionMessage.value = error.response && error.response.data && error.response.data.error
            ? `Erro no agendamento: ${error.response.data.error}`
            : 'Erro ao agendar. Por favor, tente novamente.';
        jitsiLink.value = null; // Ensure link is not displayed on error
    }
};

// Changed from copyMeetLink to copyJitsiLink
const copyJitsiLink = async () => {
    if (jitsiLink.value) {
        try {
            await navigator.clipboard.writeText(jitsiLink.value);
            copyMessage.value = 'Link copiado!';
            setTimeout(() => {
                copyMessage.value = '';
            }, 3000);
        } catch (err) {
            console.error('Erro ao copiar o link:', err);
            copyMessage.value = 'Falha ao copiar o link. Por favor, copie manualmente.';
        }
    }
};


const formatSelectedDate = (momentObject) => {
    return momentObject.format('DD/MM/YYYY');
};

onMounted(() => {
    fetchMonthAvailability(currentMonthMoment.value);
});
</script>

<style scoped>
/* Existing styles remain the same */
.calendar-day {
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.calendar-day:hover:not(.disabled-day) {
    background-color: #e9e9e9 !important;
}

.calendar-day.today {
    border: 2px solid #FFC107;
    font-weight: bold;
    color: #333;
}

.calendar-day.has-slots {
    border: 1px solid #4CAF50;
    font-weight: bold;
}

.calendar-day.selected-day {
    border: 2px solid #007bff !important;
    box-shadow: 0 0 0 2px #007bff;
}

.calendar-day.disabled-day {
    cursor: not-allowed !important;
    opacity: 0.5;
    background-color: #E0E0E0 !important;
    color: #666;
}

.calendar-day.today.disabled-day {
    border: 2px dashed #FFC107;
    opacity: 0.7;
}

.time-slot-button:hover {
    opacity: 0.8;
}
</style>