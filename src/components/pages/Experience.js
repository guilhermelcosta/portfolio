import styles from './Experience.module.css';
import JobPosition from '../sections/Experience/JobPosition';

export default function Experience() {
    return (
        <div className={styles.container}>
            <JobPosition company="PUC Minas" role="Monitor de Algoritmos e Estruturas de Dados I" start="02/2023" end="06/2023"
                         act1="Apoio aos alunos em problemas de lógica, desenvolvimento em C e dúvidas em geral"
                         skills="resolução de problemas e desenvolvimento em linguagem C"/>
            <JobPosition company="HECT Consultoria" role="Assistente Sênior" start="05/2022" end="08/2022"
                         act1="Acompanhamento e gerenciamento de obras, com elaboração de relatórios diários/mensais, estudos de produtividade e análises de critérios de medição"
                         act2="Elaboração de pleitos e pareceres, considerando os desvios observados no empreendimento (desvio de alocação de recursos, perda de produtividade, execução de serviços adicionais, mudança de escopo, dentre outros)."
                         skills="liderança e gerenciamento de projetos"/>
            <JobPosition company="HECT Consultoria" role="Assistente Pleno" start="05/2021" end="05/2022"
                         act1="Acompanhamento e gerenciamento de obras, com elaboração de relatórios diários/mensais, estudos de produtividade e análises de critérios de medição"
                         act2="Elaboração de pleitos e pareceres, considerando os desvios observados no empreendimento (desvio de alocação de recursos, perda de produtividade, execução de serviços adicionais, mudança de escopo, dentre outros)."
                         skills="liderança e gerenciamento de equipes"/>
            <JobPosition company="HECT Consultoria" role="Assistente Técnico" start="05/2020" end="05/2021"
                         act1="Realização de análises de mérito de reivindicações e cálculo de custos adicionais incorridos no contrato (desvios de produtividade, extensão de prazo, dentre outros)"
                         act2="Estudo e diagnóstico de atrasos na obra por meio de análise de cronograma (metodologia de caminho crítico)"
                         act3="Quantificação de onerosidade excessiva diagnosticada no contrato"
                         skills="habilidades analíticas e trabalho em equipe"/>
            <JobPosition company="HECT Consultoria" role="Estagiário" start="05/2018" end="08/2020"
                         act1="Atuação como apoio técnico em conflitos e disputas na execução de obras civis, industriais e contratos de fornecimento de insumos"
                         act2="Participação na elaboração de pleitos e pareceres técnicos"
                         skills="resolução de problemas e comunicação"/>
        </div>
    );
}