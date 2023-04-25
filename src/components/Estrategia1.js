import template from "../templates.js";

function Estrategia1() {
  return (
    <div>
      <h2>{template.title}</h2>
      <iframe
        width="560"
        height="315"
        src={template.youTubeVideoLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>Objetivos da estratégia</h3>
      <p>{template.strategyGoal}</p>

      <h3>Requisitos para montar estratégia</h3>
      <ul>
        {template.strategyRequirements.map((requirement) => (
          <li>
            {requirement.description}{" "}
            <a href={requirement.link.url}>{requirement.link.name}</a>
          </li>
        ))}
      </ul>

      <h3>Etapas para executar a estratégia</h3>
      <ul>
        {template.strategySteps.map((step) => (
          <li>
            <h4>{step.title}</h4>
            <p>{step.content}</p>
            {step.steps && (
              <ul>
                {step.steps.map((subStep) => (
                  <li>
                    <h4>{subStep.title}</h4>
                    <p>{subStep.content}</p>
                    </li>
                ))}
              </ul>)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estrategia1;
