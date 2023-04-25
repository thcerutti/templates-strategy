/**
 * @param {string} title
 * @param {Link} link
 */
class LinksWithDescription {
  constructor({ description, link }) {
    this.description = description;
    this.link = link;
  }
}

/**
 * @param {string} name
 * @param {string} url
 */
class Link {
  constructor({ name, url }) {
    this.name = name;
    this.url = url;
  }
}

/**
 * @param {string} title
 * @param {string} content
 * @param {string[]|StrategyStep[]|LinksWithDescription[]} steps
 */
class StrategyStep {
  constructor({ title, content, steps = [] }) {
    this.title = title;
    this.content = content;
    this.steps = steps;
  }
}

/**
 * @param {string} id
 * @param {string} category
 * @param {string} title
 * @param {string} strategyGoal
 * @param {string} time
 * @param {string} templateCoverUrl
 * @param {string} youTubeVideoLink
 * @param {string[]|LinksWithDescription[]} strategyRequirements
 * @param {string[]|StrategyStep[]|LinksWithDescription[]} steps
 */
class Template {
  constructor({
    id,
    category,
    title,
    strategyGoal,
    time,
    templateCoverUrl,
    youTubeVideoLink,
    strategyRequirements = [],
    strategySteps = [],
  }) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.strategyGoal = strategyGoal;
    this.time = time;
    this.templateCoverUrl = templateCoverUrl;
    this.youTubeVideoLink = youTubeVideoLink;
    this.strategyRequirements = strategyRequirements;
    this.strategySteps = strategySteps;
  }

  toJson() {
    return JSON.stringify(this, null, 2);
  }
}

module.exports = {
  LinksWithDescription,
  Link,
  StrategyStep,
  Template,
};
