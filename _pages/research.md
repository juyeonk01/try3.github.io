---
title: Research
layout: single
classes: research-page
---

<br>

<div class="research-entry">
  <div class="research-image">
    <img src="{{ '/assets/images/project-mixing.jpg' | relative_url }}" alt="Project thumbnail">
  </div>
  <div class="research-content">
    <h3 class="research-title">Mixing Samples to Address Weak Overlap in Causal Inference</h3>
    <p class="research-meta">
        <span class="keywords">Overlap, Mixing</span><br>
        <span class="authors">Jaehyuk Jang, Suehyun Kim</span>
    </p>
    <div class="abstract">
        <p class="abstract-text">
        In observational studies, the assumption of sufficient overlap (positivity) is fundamental for the identification and estimation of causal effects. Failing to account for this assumption yields inaccurate and potentially infeasible estimators. To address this issue, we introduce a simple yet novel approach, <i>mixing</i>, which mitigates overlap violations by constructing a synthetic treated group that combines treated and control units. Our strategy contributes to weighting literature with several advantages. First, it improves the accuracy of the estimators by preserving unbiasedness while reducing variance. This phenomenon results from the shrinkage of propensity scores in the mixed sample, which enhances robustness to poor overlap, but remains effective regardless of the overlap level. Second, it enables direct estimation of the target estimand without discarding extreme observations or modifying the target population. Third, the mixing approach is highly adaptable to various weighting schemes, including contemporary methods such as entropy balancing. Fourth, it serves as an indirect method to diagnose model misspecification. We illustrate its empirical performance through extensive simulation studies. We also introduce a practical guidance for diagnosing and tackling limited overlap with an analysis of chronic obstructive pulmonary disease (COPD) dataset provided by Samsung Medical Center. Through our strategy, we investigate whether small airway disease (SAD) precedes emphysema progression among early-stage COPD patients.
        </p>
        <div class="toggle-abstract">▼</div>
    </div>
  </div>
</div>


<div class="research-entry">
  <div class="research-image">
    <img src="{{ '/assets/images/project-overlap.jpg' | relative_url }}" alt="Project thumbnail">
  </div>
  <div class="research-content">
    <h3 class="research-title">Quantifying Overlap in Causal Inference: A Framework for Early-Stage Assessment</h3>
    <p class="research-meta">
        <span class="keywords">Overlap, Mixture Model</span><br>
        <span class="authors">Geondo Park, Juyeon Kim</span>
    </p>
    <div class="abstract">
        <p class="abstract-text">
        Overlap between treated and control groups is a critical assumption in causal inference, and the most common way to assess overlap is through visual diagnostics, such as propensity score histograms or density plots. We propose a novel framework to quantify overlap magnitude prior to estimation, offering insight during the initial assessment phase. To address the challenges of existing methods, we develop a computationally efficient approach that uses a weak distributional assumption, inspired by two-component mixture models, to directly quantify overlap. Indirect approaches, such as cardinality matching or effective sample size (ESS), may be used to quantify overlap, though their primary goal is not to do so. Cardinality matching maximizes the size of matched controls within specified constraints, and its maximum size can, roughly speaking, correspond to the maximum overlap. However, this indirect measure is unreliable due to the variability introduced by changing constraint conditions. ESS, commonly used in weighting approaches, can indirectly reflect overlap but is highly variable and depends heavily on the choice of weighting methods. By providing a robust and interpretable measure of overlap, our approach enables researchers to make informed decisions early in the analysis, ensuring more efficient and reliable causal estimators. This work fills a critical gap in causal inference methodology, offering a practical and scalable tool for early-stage assessment of overlap.
        </p>
        <div class="toggle-abstract">▼</div>
    </div>
  </div>
</div>

<div class="research-entry">
<div class="research-image">
    <img src="{{ '/assets/images/project-highdim.jpg' | relative_url }}" alt="Project thumbnail">
  </div>
  <div class="research-content">
    <h3 class="research-title">Distributional Matching for Observational Studies with High-Dimensional Covariates</h3>
    <p class="research-meta">
        <span class="keywords">Matching, High-Dimensional Data</span><br>
        <span class="authors">Hajoung Lee</span>
    </p>
    <div class="abstract">
        <p class="abstract-text">
        We propose a new matching framework that treats design as distributional alignment and optimizes similarity of the joint covariate distributions between treated and control groups. The method is introduced for high-dimensional, low-sample-size settings, where distance concentration makes pairwise distances nearly indistinguishable, thereby degrading matching performance. The framework is outcome-free and model-agnostic, preserves all covariates without dimension reduction, and includes a dependence-based covariate balance measure that captures nonlinear associations while remaining interpretable in high dimensions. It is intended to complement standard unit-level approaches, and we support it with extensive simulations and theoretical results that clarify population targets and high-dimensional behavior. The method also performs well in low-dimensional regimes, making it effectively dimension agnostic and suitable across a wide range of settings.
        </p>
        <div class="toggle-abstract">▼</div>
    </div>
  </div>
</div>


<div class="research-entry">
  <div class="research-image">
    <img src="{{ '/assets/images/project-netflix.jpg' | relative_url }}" alt="Project thumbnail">
  </div>
  <div class="research-content">
    <h3 class="research-title">Causal Impact of OTT Service on IPTV Viewing: Time-Series Cross-Sectional Data Matching</h3>
    <p class="research-meta">
        <span class="keywords">Matching</span><br>
        <span class="authors">Suehyun Kim</span>
    </p>
    <div class="abstract">
        <p class="abstract-text">
        In modern society, the rapid growth of streaming services has fundamentally changed how people consume television. This study analyzes the causal impact of streaming service usage on IPTV viewing. To do so, we compare users who adopt streaming services with those who do not, while controlling for time-varying confounders in a panel data setting. We propose a novel matching technique that enables inference on both short- and long-term causal effects, accounting for the time-dependent nature of covariates. The results show that streaming service usage significantly influences IPTV consumption. These findings provide valuable insights for content providers, broadcasters, and advertisers seeking to understand viewing behaviors and develop informed strategies.
        </p>
        <div class="toggle-abstract">▼</div>
    </div>
  </div>
</div>


<div class="research-entry">
  <div class="research-image">
    <img src="{{ '/assets/images/project-interaction.jpg' | relative_url }}" alt="Project thumbnail">
  </div>
  <div class="research-content">
    <h3 class="research-title">Randomization-Based Inference for Causal Interaction with Sensitivity Analysis</h3>
    <p class="research-meta">
        <span class="keywords">Sensitivity Analysis</span><br>
        <span class="authors">Zion Lee</span>
    </p>
    <div class="abstract">
        <p class="abstract-text">
        Understanding causal interactions is critical in observational studies but remains challenging due to confounding and methodological limitations. While these concepts have been extensively studied in randomized experiments, their application to observational data is limited. We propose a novel randomization-based inference framework that leverages matching methods to investigate causal interactions. Within this framework, we formally define the attributable interaction effect and develop a statistical test for detecting its presence. Furthermore, we extend our approach to incorporate sensitivity analysis, allowing researchers to assess the robustness of their findings against potential unmeasured confounding. This unified methodology provides a rigorous and practical tool for studying causal interactions in observational data, bridging the gap between experimental theory and applied research.
        </p>
        <div class="toggle-abstract">▼</div>
    </div>
  </div>
</div>


