
const btn_Sobre = document.querySelector('#sobre')
const btn_Exp = document.querySelector('#exp')



function sobre(){
    document.querySelector('#title-text-biography').innerText = 'Biografia'
    document.querySelector('#box-text-biography').innerHTML = 
    `
<h4 class="sub-title-paragraph">Uma Jornada de Evolução e Determinação</h4>
    <p class="text-paragraph">Welinton Farias do Nascimento Junior é um profissional determinado e apaixonatecnologia, com uma trajetória marcada pela resiliência e pela busca constanevolução. Com experiência em diferentes setores, desde logística e comércio exteriorempreendedorismo no setor de construção, ele desenvolveu habilidades essenciais em gplanejamento e tomada de decisão.
                    </p>
    <p class="text-paragraph"> Atualmente, Welinton direciona sua carreira para o desenvolvimento full-stack, unincriatividade e visão estratégica à tecnologia. Seu primeiro contato com programação oaos 16 anos, despertando uma paixão que hoje o impulsiona a construir soluções diinovadoras. Seu objetivo é fundar uma software house, onde poderá transformar ideprodutos eficientes e impactantes.
                    </p>
    <p class="text-paragraph"> Além de sua expertise técnica, Welinton é um profissional disciplinado, comprometido e sempre em busca de aprimoramento. Ele acredita que a evolução contínua é a chave para o sucesso e aplica essa mentalidade tanto em seus projetos quanto no atendimento a seus clientes.
                    </p>
    <p class="text-paragraph">Se você busca um desenvolvedor comprometido, que alia visão empreendedora e tecnológico, Welinton é a escolha ideal para transformar suas ideias em realidade.
                    </p >
    `
}

function Exp(){
    document.querySelector('#title-text-biography').innerText = 'Experiencias'
    document.querySelector('#box-text-biography').innerHTML = 
    `
<h4 class="sub-title-paragraph">Neo Bpo - 2024 - 2025</h4>
    <p class="text-paragraph">
    Atuei nessa empresa como agente de processos de negocios I, antes de sair cheguei a atuar como agente de processos de negocios II, na área de vendas receptiva, trabalhavamos com diversos produtos na area de vendas relacionados ao cartão da credSystem, eu era responsavel pela area de odonto de vendas e ficava encarregado de ofertar esse plano.
    </p>
<h4 class="sub-title-paragraph">Deposito machado de materiais de construção ltda 2021 - 2023</h4>
    <p class="text-paragraph">
    Atuei nessa empresa Sócio proprietario, aonde fiquei responsaveis por diversos setores do estabelecimento, conseguindo atuar na area administrativa e na area de vendas, gerenciando uma equipe de 2 entregadores e 3 vendedores, eu era responsavel por elaborar, aplicar e medir processos de melhora nas áreas de vendas e logistica.
    </p>
<h4 class="sub-title-paragraph">One Subsea submarinos  2020 - 2021</h4>
    <p class="text-paragraph">
    atuei como jovem aprendiz nessa empresa, na area de comércio exterior aonde tive a oportunidade de aprender mais sobre importação e exportação de insumos e todas as tratativas alfandegarias relacionadas com o processo desde a compra até o recebimento do insumo na fabrica, lidando com processos e organização de documentos e auxuilio dos despachantes.
    </p>
    `
}