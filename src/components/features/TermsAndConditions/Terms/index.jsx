import { Box } from "@mui/material";
import { Section } from "components/common";
import styles from "./styles";

const Terms = () => {
  return (
    <Section heading="Terms and Conditions" customStyles={styles.wrapper}>
      <Box sx={styles.container}>
        <Box>
          <Box sx={styles.heading}>Introduction</Box>
          <Box sx={styles.description}>
            Welcome to the "Billionaires Bridesmaid" website (the "Site"). These
            Terms and Conditions govern your use of the Site, including all
            content, features, and services provided by "Billionaires
            Bridesmaid" (referred to as "we", "us", or "our"). By accessing or
            using the Site, you agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, you may not access
            the Site.
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Use of the Site</Box>
          <Box sx={styles.description}>
            <Box component="li">
              You must be at least 18 years old to use the Site.
            </Box>
            <Box component="li">
              You agree to use the Site only for lawful purposes and in
              accordance with these Terms and Conditions.
            </Box>
            <Box component="li">
              You are responsible for maintaining the confidentiality of your
              account and password and for restricting access to your computer
              or device.
            </Box>
            <Box component="li">
              We reserve the right to modify or discontinue the Site at any time
              without prior notice.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Intellectual Property Rights</Box>
          <Box sx={styles.description}>
            <Box component="li">
              The Site and its entire contents, features, and functionality are
              owned by "Billionaires Bridesmaid" and are protected by copyright,
              trademark, and other intellectual property laws.
            </Box>
            <Box component="li">
              You may not modify, copy, distribute, transmit, display, perform,
              reproduce, publish, license, create derivative works from,
              transfer, or sell any information, software, products, or services
              obtained from the Site.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>User Content</Box>
          <Box sx={styles.description}>
            <Box component="li">
              By submitting any content (including but not limited to text,
              photos, videos, or other materials) to the Site, you grant
              "Billionaires Bridesmaid" a perpetual, irrevocable, worldwide,
              royalty-free, and non-exclusive license to use, reproduce, modify,
              adapt, publish, translate, distribute, and display such content in
              any form, media, or technology now known or hereafter developed.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Limitation of Liability</Box>
          <Box sx={styles.description}>
            <Box component="li">
              In no event shall "Billionaires Bridesmaid", its directors,
              officers, employees, or agents be liable to you for any direct,
              indirect, incidental, special, consequential, or punitive damages
              arising out of or in any way connected with your use of the Site
              or any content on the Site.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Governing Law</Box>
          <Box sx={styles.description}>
            <Box component="li">
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of [Your Country], without regard to its
              conflict of law provisions.
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={styles.heading}>Changes to Terms and Conditions</Box>
          <Box sx={styles.description}>
            <Box component="li">
              We reserve the right to update or modify these Terms and
              Conditions at any time without prior notice. Your continued use of
              the Site after any such changes constitutes your acceptance of the
              new Terms and Conditions.
            </Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Terms;
