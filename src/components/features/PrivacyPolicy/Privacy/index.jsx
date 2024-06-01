import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const Privacy = () => {
  return (
    <Section heading="Privacy Policy" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box>
          <Box sx={styles.heading}>Introduction</Box>
          <Box sx={styles.description}>
            Welcome to the "Billionaires Bridesmaid" website (the "Site"). This
            Privacy Policy describes how we collect, use, and disclose your
            personal information when you use the Site. By accessing or using
            the Site, you agree to be bound by this Privacy Policy. If you do
            not agree with any part of this policy, you may not access the Site.
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Information We Collect</Box>
          <Box sx={styles.description}>
            <Box component="li">
              Personal Information: We may collect personal information such as
              your name, contact details, date of birth, and address when you
              register on the Site or subscribe to our newsletter.
            </Box>
            <Box component="li">
              Usage Data: We may automatically collect information about your
              interactions with the Site, including your IP address, browser
              type, operating system, and pages visited.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>How We Use Your Information</Box>
          <Box sx={styles.description}>
            <Box component="li">
              Contestant Selection: We use the information you provide to
              evaluate your eligibility and suitability for participation in the
              "Billionaires Bridesmaid" reality show.
            </Box>
            <Box component="li">
              Communication: We may use your contact information to send you
              updates, announcements, and promotional offers related to the
              reality show.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Information Sharing and Disclosure</Box>
          <Box sx={styles.description}>
            <Box component="li">
              Third-Party Service Providers: We may share your information with
              trusted third-party service providers who assist us in operating
              the Site or managing communications.
            </Box>
            <Box component="li">
              Legal Compliance: We may disclose your information in response to
              legal requests, court orders, or to comply with applicable laws
              and regulations.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Data Security</Box>
          <Box sx={styles.description}>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please be aware that no method of transmission
            over the internet or electronic storage is 100% secure.
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Your Choices</Box>
          <Box sx={styles.description}>
            <Box component="li">
              Opt-Out: You may opt out of receiving promotional communications
              from us by following the unsubscribe instructions provided in our
              emails or by contacting us directly.
            </Box>
            <Box component="li">
              Access and Update: You may access, update, or delete your personal
              information by logging into your account or contacting us for
              assistance.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Changes to Terms and Conditions</Box>
          <Box sx={styles.description}>
            <Box component="li">
              We reserve the right to update or modify this Privacy Policy at
              any time without prior notice. Any changes will be effective
              immediately upon posting on this page.
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Privacy;
