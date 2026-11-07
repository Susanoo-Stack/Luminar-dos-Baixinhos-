// ===== CONFIGURAÇÃO =====
const EMAIL = 'luminardosbaixinho@gmail.com'; // email que recebe as inscrições
const WHATSAPP = '244950882908';              // WhatsApp de apoio se o envio falhar

// ===== DOCUMENTOS (# título, - item, | linha de tabela) =====
const REG = `
# Introdução
O Luminar dos Baixinhos é uma instituição que tem como prioridade a segurança da criança, o desenvolvimento de todo o seu potencial, assim como a criação de um ambiente de alegria e diversão.
# Objectivos
- Contribuir para a estabilidade e segurança afetiva da criança;
- Proporcionar às crianças não só um sítio onde se sintam seguras e protegidas, mas também que desenvolva todo o seu potencial preparando-as para o nível seguinte de ensino.
- Garantir um serviço de qualidade e contínuo para que os pais consigam conciliar o trabalho e família, motivando-os na sua construção de carreira assim como a continuação da família.
# Normas de Funcionamento
- O Luminar dos Baixinhos funciona das 05h00 às 17h00.
- Este estabelecimento encontra-se fechado nos dias 24 e 25 de Dezembro.
- Em situações extraordinárias que comprometem o bom funcionamento da instituição poderemos encerrar sem aviso prévio.
# Inscrição
- Poderá haver uma pré-inscrição durante todo o ano para crianças dos 0 aos 36 meses.
- A Inscrição realiza-se de Novembro a Janeiro.
- A renovação da inscrição é realizada no mês de Novembro pagando a respectiva reinscrição e seguro anual, caso contrário a instituição reserva-se no direito de guardar a vaga para outra criança em lista de espera.
- A inscrição tem carácter anual, sendo obrigatório o pagamento de 12 mensalidades.
- Se houver alguma desistência de frequência até Novembro e a instituição preencher a vaga da criança será devolvido o dinheiro já pago da reinscrição e seguro anual.
- A desistência durante o ano tem que ser feita por escrito à direção da Instituição.
# Admissão
A criança só será admitida depois de inscrita, pagos os respectivos custos e de entregues os seguintes documentos:
- Ficha de Inscrição, devidamente preenchida;
- Regulamento interno assinado pelo(a) encarregado(a) de educação;
- Cópia de Cédula Pessoal da criança e B.I dos pais;
- Atestado médico em como a criança não tem doença infecto-contagiosa e pode frequentar a instituição;
- Cópia do Boletim de Vacinas;
- Cópia do Cartão de Utente;
- Cópia do Bilhete de identidade / Cartão de cidadão / Passaporte do encarregado de educação para Estrangeiro;
- Cópia do n.º de contribuinte do Encarregado de Educação;
- Duas fotografias.
# Frequência
Depois da inscrição e a respectiva admissão, a criança pode usufruir em pleno da instituição.
# Mensalidade
- As mensalidades serão pagas até ao dia 10 de cada mês em cheque, numerário ou transferência bancária;
- O não cumprimento do prazo de pagamento, implica o pagamento de 20% de 11 a 18, 40% de 19 a 26, de 27 ao dia do mês seguinte multa de 60%, do dia 3 do mês seguinte em diante multa de 100%.
- O mês de Dezembro é pago 70% e 30% na inscrição e reinscrição.
- A frequência de mais dois irmãos na instituição concederá um desconto de 20% sobre a mensalidade do irmão mais velho;
- À instituição é permitida a actualização anual dos preços, informando os pais sobre o preçário a ser aplicado no ano lectivo seguinte.
- Se a criança faltar durante um longo período de tempo (15 dias), a mensalidade é paga na totalidade, salvo se houver uma justificação de doença prolongada, sendo descontados esses dias.
- A não frequência da instituição por motivos alheios a esta não implica redução ou devolução de mensalidades, salvo em caso de doença acima descrito.
# Férias das crianças
Em caso de as crianças irem de férias, estas deverão ser comunicadas com antecedência à instituição para se organizar internamente os recursos humanos disponíveis para garantir um bom funcionamento da instituição.
# Faltas
- Devem ser comunicadas com o máximo de antecedência possível;
- Em caso de doença repentina, comunicada até no máximo às 10 horas.
- Os leites, papas ou farinhas lácteas especiais estarão disponíveis no pacote Premium, caso contrário será acrescido ao valor da mensalidade seguinte.
# Informação/Recados
A informação sobre saídas com outras pessoas, medicamentos, dietas ou outro tipo de informação deverá ser registada e entregue à pessoa que recebe a criança para ser depois passada à respectiva educadora.
# Passeios/Visitas
- Ao longo do ano serão agendados passeios e visitas, às quais os encarregados de educação terão informação atempadamente.
- Os pais terão um prazo para pagar e assinar a autorização, caso contrário a criança não participará na actividade.
# Responsabilidades da Instituição
- O Luminar dos Baixinhos é responsável pela criança desde a sua chegada até a sua saída.
- Para autorizar a saída da criança com pessoas, mesmo que familiares, que não constem da ficha de inscrição devem avisar no acto da entrega da criança. Tem que fornecer o nome e número de BI / cartão de cidadão da pessoa que virá buscar a criança.
- Na hora da saída a pessoa deverá mostrar a sua identificação, caso contrário a instituição reserva-se ao direito de não entregar a criança por motivos de segurança.
- O Luminar dos Baixinhos não se responsabiliza por valores, bijuterias ou brinquedos trazidos de casa e perdidos pelas crianças (à sexta-feira celebrar-se-á o dia do brinquedo, em que a criança trará apenas um favorito).
# Higiene e segurança
- As crianças têm que entrar limpas e asseadas na instituição, trazendo sempre o bibe de carácter obrigatório.
# Doenças
- A instituição dispõe de um pediatra que poderá se deslocar ao infantário mediante o pagamento da franquia, será sempre requisitado mediante autorização dos pais.
- Não devem frequentar a instituição, crianças que apresentem sintomas de doença, como, febres, diarreias, vómitos, gastroenterites, conjuntivites, aftas, papeiras, e outros que prejudiquem o bem-estar das crianças presentes na instituição;
- Após o período de doença ou quando sujeitas a medicação, as crianças poderão frequentar a Instituição após entrega de atestado médico, declarando que podem frequentar a mesma;
- Caso a criança esteja a ser medicada, os funcionários só poderão administrar os medicamentos com autorização dos pais, onde será registado o nome da criança, a hora e quantidade (Ficha de medicação);
- Caso a criança manifeste sintomas de doença na instituição, os pais ou encarregados de educação serão imediatamente contactados para a irem buscar logo que possível.
# Alimentação
- As crianças têm que almoçar/jantar na instituição.
- A partir de um ano tem que vir com o pequeno-almoço tomado.
- Caso a criança precise de alguma comida de dieta, tem que ser comunicado até às 10:30.
- A ementa mensal será aprovada por um nutricionista, enviada no email dos encarregados e afixada mensalmente na recepção.
- As alergias a determinados alimentos deverão constar na ficha de inscrição.
- Se os pais quiserem uma alimentação diferente por algum motivo devem providenciar a comida, a instituição só se responsabiliza por aquecer e servir à criança.
- As crianças com agentes parasitários estão temporariamente impedidas de frequentarem na instituição até que se constatar que houve desinfestação.
# Material
Os pais deverão trazer os seguintes materiais para a instituição ou poderão pagar à instituição um valor que cobra este material:
- Fraldas;
- Muda de roupa;
- Saco para roupa suja;
- Copo;
- Escova de dentes;
- Pasta dentífrica;
- Avental para actividades de expressão plástica;
- Pijama (em caso de dormida).
# Encarregados de Educação
- Para tratar de algum assunto os encarregados de educação devem dirigir-se à educadora responsável pela sala.
- Poderão entrar em qualquer altura na sala, excepto quando as actividades de carácter pedagógico que estiverem a decorrer precisarem de continuidade.
- A qualquer momento podem pedir informações da criança.
- Deverão identificar todos os objectos e vestuário da criança.
A instituição está sempre disponível para qualquer informação ou esclarecimento adicional.
`;

const BOL = `
# Horário
- A Creche e ATL Luminar dos Baixinhos encontra-se em funcionamento das 05h00 às 17h00.
- A hora limite da entrada é às 9:00h, período em que se encerra o portão de modo a não permitir a entrada de mais crianças;
- A Secretaria da Creche estará aberta ao público das 7:00h às 14:00h e das 16:30h às 19:30h.
- A Creche estará encerrada: sábado, domingo, feriados nacionais, religiosos e véspera de Natal e Ano Novo (data a determinar). Caso necessite dos nossos serviços nestas datas elas terão um custo.
# Preçário
- No acto de inscrição os pais deverão pagar: Inscrição 1.000 Kz;
- Mensalidade Creche: bebés dos 0 aos 6 meses 25.000 Kz; crianças dos 13 aos 24 meses 18.000 Kz; crianças de 3 anos 16.000 Kz;
- Material didáctico para criança dos 3 aos 5 anos – 20.000 Kz e para os 2 anos – 10.000 Kz / Ano.
# Serviços extras mensais (não incluídos na propina)
- ATL: 40.000 Kz
- Equipamento de capoeira 9.000 Kz (só para crianças dos 4 aos 5 anos)
- Equipamento de karaté 15.000 Kz (para crianças dos 4 aos 5 anos)
- Equipamento de ballet 13.000 Kz (só para meninas dos 3, 4 e 5 anos)
- Equipamento para natação 10.000 Kz (para crianças dos 3, 4 e 5 anos)
# Documentos necessários para inscrição
- Cédula pessoal da criança;
- Cópia do B.I dos pais;
- Cartão de vacinas devidamente atualizado;
- 3 fotografias atualizadas;
- Atestado médico em como a criança não tem doenças infecto-contagiosas e pode frequentar a Creche.
# Material necessário nas mochilas das crianças dos 6 aos 36 meses
- Toalhitas;
- Fraldas;
- 2 Mudas de roupas;
- 1 Chupeta com protecção caso a criança esteja habituada;
- 2 Biberões, um de leite e um de água;
- 1 Creme para assaduras caso use;
- Chinelos;
- Toalhas de rosto.
# Material necessário nas mochilas das crianças dos 3 aos 5 anos
- Toalhitas;
- 1 Muda de roupa;
- 2 Cuecas;
- Escova e pasta de dentes;
- Chinelos;
- Pente ou escova para cabelo;
- Toalha de rosto.
# Uniforme
É obrigatório o uso da Bata.
# Objectos trazidos de casa
Não nos responsabilizamos por objectos trazidos de casa, nomeadamente, joias, jogos, brinquedos, telefones, etc.
# Saúde
A criança não pode permanecer na creche se apresentar sinais de doença, sobretudo em caso de doenças infecto-contagiosas, nomeadamente aftas, diarreia, tinha, piolhos, papeira, sarampo, varicela, conjuntivite, sarna, gripe, etc.
Quando ultrapassada a convalescença da criança terá que ser apresentada à direcção uma comunicação médica confirmando estar a criança em condições de frequentar a Creche;
Quando for necessário ministrar medicação à criança, esta deve ser entregue à responsável pela mesma, assim como a informação escrita relativa à dosagem e horário;
Em caso de emergência, a criança será levada aos serviços hospitalares mais próximos sendo os pais contactados imediatamente.
# Acto de entrega das crianças
As crianças só poderão sair acompanhadas pelos pais ou pessoas autorizadas, em caso de dúvida reservamo-nos ao direito de recusar a saída da criança.
Por uma questão de segurança no acto de entrega das crianças os encarregados de educação devem aguardar à entrada das instalações.
# Visitas
O encarregado de educação pode visitar ou observar o seu filho durante as actividades diárias, desde que solicite previamente à direcção ou à coordenadora pedagógica.
# Mensalidade e multas
A mensalidade é paga até ao dia 3 de cada mês. Qualquer atraso além da data prevista implicará o pagamento de uma taxa de 20% crescente na mesma margem nas primeiras 3 semanas dobrando na quarta semana conforme a tabela abaixo.
|Dia do pagamento|Multa
|De 1 a 10|Pagamento normal
|De 11 a 18|20%
|De 19 a 26|40%
|De 27 ao dia 2 do mês seguinte|60%
|Do dia 3 do mês seguinte em diante|100%
- O pagamento da mensalidade será feito durante 12 meses.
- Depois das 20h haverá penalização de 3.000 Kz cada fracção de uma hora.
- Desistência: a desistência da criança deve ser comunicada com um mês de antecedência e não dá direito a devolução da propina ou inscrição paga.
- OBS: para pais de alunos internos que queiram os serviços de sábado, domingo e feriados terão de pagar 40% ao valor da propina.
- Para pais externos que precisarem dos nossos serviços nos finais de semana terão de pagar um valor diário de 5.000 Kz.
# Contactos
Telefone: 924 286 794 / 915 551 532
Email: ${EMAIL}
`;

function md(s) {
  let o = '', ul = 0, tb = 0;
  const cells = (l, t) => '<tr>' + l.slice(1).split('|').map(c => `<${t}>${c}</${t}>`).join('') + '</tr>';
  s.trim().split('\n').forEach(l => {
    l = l.trim(); if (!l) return;
    const li = l[0] == '-', tr = l[0] == '|';
    if (ul && !li) { o += '</ul>'; ul = 0; }
    if (tb && !tr) { o += '</table>'; tb = 0; }
    if (l[0] == '#') o += `<h3>${l.slice(1).trim()}</h3>`;
    else if (li) { if (!ul) { o += '<ul>'; ul = 1; } o += `<li>${l.slice(1).trim()}</li>`; }
    else if (tr) { if (!tb) { o += '<table>' + cells(l, 'th'); tb = 1; } else o += cells(l, 'td'); }
    else o += `<p>${l}</p>`;
  });
  return o + (ul ? '</ul>' : '') + (tb ? '</table>' : '');
}
regc.innerHTML = md(REG);
bolc.innerHTML = md(BOL);

// ===== MENU RESPONSIVO =====
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => {
  const opened = nav.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
  menuToggle.innerHTML = opened ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>' : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'; 
});
document.querySelectorAll('.links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'; menuToggle.setAttribute('aria-label', 'Abrir menu'); }
}));

// Indica no menu a secção actualmente visível.
const sectionLinks = [...document.querySelectorAll('.links a[href^="#"]')];
const trackedSections = sectionLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach(a => {
        const active = a.getAttribute('href') === '#' + entry.target.id;
        if (active) a.setAttribute('aria-current', 'location');
        else a.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-22% 0px -65% 0px', threshold: 0 });
  trackedSections.forEach(section => sectionObserver.observe(section));
}


// ===== JANELAS =====
document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o) { e.preventDefault(); const target = document.getElementById(o.dataset.open); if (target && !target.open) target.showModal(); return; }
  if (e.target.closest('[data-close]')) { e.target.closest('dialog').close(); return; }
  if (e.target.tagName == 'DIALOG') { e.target.close(); return; }
  const p = e.target.closest('.ph img');
  if (p) { const d = document.getElementById('foto'), i = d.querySelector('img'); i.src = p.src; i.alt = p.alt; d.showModal(); }
});

// ===== TÍTULO COM LETRAS SALTITANTES =====
const C = ['#FF3D8B', '#FF7A1A', '#17A85A', '#1E8FE0', '#7C4DEB'];
const t = document.getElementById('titulo');
let n = 0;
t.innerHTML = t.textContent.split(' ').map(w =>
  '<span class="w">' + [...w].map(c => `<span class="l" style="--c:${C[n % 5]};--d:${(n++ * .05).toFixed(2)}s">${c}</span>`).join('') + '</span>'
).join(' ');

// ===== ESTRELAS A SUBIR =====
const st = document.querySelector('.stars');
for (let i = 0; i < 22; i++) {
  const b = document.createElement('b'), s = 10 + Math.random() * 18;
  b.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;color:${C[i % 5]};animation-duration:${14 + Math.random() * 16}s;animation-delay:${-Math.random() * 30}s`;
  st.append(b);
}

// ===== APARECER AO ROLAR =====
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.addEventListener('transitionend', () => e.target.style.setProperty('--d', '0s'), { once: true });
  io.unobserve(e.target);
}), { threshold: .12 });
document.querySelectorAll('.rv').forEach((e, i) => { e.style.setProperty('--d', (i % 4) * .09 + 's'); io.observe(e); });

// ===== FORMULÁRIO DE INSCRIÇÃO =====
const f = document.getElementById('f'), msg = document.getElementById('msg');
f.addEventListener('submit', async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(f));
  if (d._honey) return;
  const b = f.querySelector('[type=submit]');
  b.disabled = true; msg.className = ''; msg.textContent = 'A enviar…';
  try {
    const r = await fetch('https://formsubmit.co/ajax/' + EMAIL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...d, _subject: 'Nova inscrição – ' + d['Nome da criança'], _template: 'table', _captcha: 'false' })
    });
    const j = await r.json();
    if (!r.ok || String(j.success) !== 'true') throw 0;
    f.reset(); msg.className = 'ok';
    msg.textContent = '🎉 Inscrição enviada! Entraremos em contacto em breve.';
  } catch {
    const txt = Object.entries(d).filter(([k, v]) => v && k[0] != '_').map(([k, v]) => k + ': ' + v).join('\n');
    msg.className = 'err';
    msg.innerHTML = 'Não foi possível enviar agora. <a href="https://wa.me/' + WHATSAPP + '?text=' +
      encodeURIComponent('Inscrição – Luminar dos Baixinhos\n' + txt) + '" target="_blank" rel="noopener">Enviar pelo WhatsApp</a>';
  }
  b.disabled = false;
});
