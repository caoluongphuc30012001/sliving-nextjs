import { Container } from 'react-bootstrap';
import {
  SectionSmartDoorLocks,
  SectionSmartElevator,
  SectionSmartFaceID,
  SectionSmartParking,
  SectionSmartTurnstile,
  SectionTechnologyDoorLocks,
  SectionTechnologyElevator,
  SectionTechnologyFaceID,
  SectionTechnologyTurnstile,
  SectionTopSmartBuilding,
} from './body';

function SmartBuilding() {
  return (
    <main>
      <Container className="max-width-100 px-0" fluid>
        <SectionTopSmartBuilding />
        <SectionSmartParking />
        <SectionSmartDoorLocks />
        <SectionTechnologyDoorLocks />
        <SectionSmartElevator />
        <SectionTechnologyElevator />
        <SectionSmartTurnstile />
        <SectionTechnologyTurnstile />
        <SectionSmartFaceID />
        <SectionTechnologyFaceID />
        {/* <SectionHelpMore /> */}
      </Container>
    </main>
  );
}

export default SmartBuilding;
