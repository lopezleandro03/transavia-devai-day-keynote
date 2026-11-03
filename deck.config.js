import CoverSlide from './src/slides/CoverSlide.jsx'
import DeveloperAiEvolutionSlide from './src/slides/DeveloperAiEvolutionSlide.jsx'
import HumanAgentWorkPatternsSlide from './src/slides/HumanAgentWorkPatternsSlide.jsx'
import AbstractionLeapSlide from './src/slides/AbstractionLeapSlide.jsx'
import AbstractionLadderBuildSlide from './src/slides/AbstractionLadderBuildSlide.jsx'
import VibesDontScaleSlide from './src/slides/VibesDontScaleSlide.jsx'
import GitHubPlatformGrowthSlide from './src/slides/GitHubPlatformGrowthSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'
import AgenticEngineerSlide from './src/slides/AgenticEngineerSlide.jsx'
import SpecifyTheWorkSlide from './src/slides/SpecifyTheWorkSlide.jsx'
import SoftwareFactorySlide from './src/slides/SoftwareFactorySlide.jsx'
import EvaluateOutcomesSlide from './src/slides/EvaluateOutcomesSlide.jsx'
import TrustYourProcessSlide from './src/slides/TrustYourProcessSlide.jsx'
import EngineerFactorySlide from './src/slides/EngineerFactorySlide.jsx'
import EvaluateTheOutcomesSlide from './src/slides/EvaluateTheOutcomesSlide.jsx'
import SddFrameworksSlide from './src/slides/SddFrameworksSlide.jsx'
import AzureSreAgentSlide from './src/slides/AzureSreAgentSlide.jsx'
import ZoomItOutDividerSlide from './src/slides/ZoomItOutDividerSlide.jsx'
import AgenticDeveloperDividerSlide from './src/slides/AgenticDeveloperDividerSlide.jsx'
import ClosingCallSlide from './src/slides/ClosingCallSlide.jsx'
import NeverAboutCodeSlide from './src/slides/NeverAboutCodeSlide.jsx'

export default {
  id: 'transavia-devai-day-keynote',
  title: 'Transavia DevAI Day Keynote',
  subtitle: 'A presentation built with deck-engine',
  description: 'A presentation built with deck-engine',
  meta: {
    seededTemplate: true,
    contentStatus: 'sample',
    contextPolicy: 'ignore-sample-content-until-user-replaces-it',
  },
  icon: '🎴',
  accent: '#33db4a',
  theme: 'light',
  appearance: 'light',
  order: 1,
  hiddenSlides: [1],
  slides: [
    CoverSlide,
    DeveloperAiEvolutionSlide,
    HumanAgentWorkPatternsSlide,
    AbstractionLeapSlide,
    AbstractionLadderBuildSlide,
    GitHubPlatformGrowthSlide,
    VibesDontScaleSlide,
    AgenticDeveloperDividerSlide,
    AgenticEngineerSlide,
    SpecifyTheWorkSlide,
    SddFrameworksSlide,
    EngineerFactorySlide,
    SoftwareFactorySlide,
    TrustYourProcessSlide,
    EvaluateTheOutcomesSlide,
    AzureSreAgentSlide,
    ZoomItOutDividerSlide,
    EvaluateOutcomesSlide,
    ClosingCallSlide,
    NeverAboutCodeSlide,
    ThankYouSlide,
  ],
  superdeck: true,
}
