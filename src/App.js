import './App.css';
import ProgressIndicator from './components/ProgressIndicator';
import SignUpSteps from './components/signup-steps/SignUpSteps';
import StepsNavigation from './components/StepsNavigation';

export default function App() {
  return (
    <div className='container font-body static bg-magnolia'>
      {/* Step progress */}
      <ProgressIndicator />

      {/* SignUp Steps */}
      <SignUpSteps />

      {/* Navigation */}
      <StepsNavigation />
    </div>
  )
}
