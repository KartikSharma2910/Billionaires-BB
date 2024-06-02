import { Box } from "@mui/material";
import { Button, Input, Section } from "components/common";
import { useForm } from "react-hook-form";
import styles from "./styles";

const Contact = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      city: "",
      emailAddress: "",
      messages: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Section heading="Contact us" customStyles={styles.container}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.leftWrapper}>
          <Box component="img" src="/hands.png" />
        </Box>
        <Box sx={styles.rightWrapper}>
          <Box sx={styles.rightLeftBox}>
            <Box sx={styles.miniGaps}>
              <Box sx={styles.mainHeading}>Inquiries</Box>
              <Box sx={styles.description}>
                If you have any questions, concerns, or feedback, please don't
                hesitate to reach out to us.
              </Box>
            </Box>
            <Box sx={styles.miniGaps}>
              <Box sx={styles.mainHeading}>Contact Information</Box>
              <Box sx={styles.miniGaps}>
                <Box>
                  <Box sx={styles.miniHeading}>Email</Box>
                  <Box sx={styles.description}>
                    support@billionairebrides.com
                  </Box>
                </Box>
                <Box>
                  <Box sx={styles.miniHeading}>Phone</Box>
                  <Box sx={styles.description}>+91123456789</Box>
                </Box>
                <Box>
                  <Box sx={styles.miniHeading}>Address</Box>
                  <Box sx={styles.description}>
                    123 Main Street, City, State, ZIP Code
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.formWrapper}>
            <Input
              name="name"
              label="Name"
              errors={errors}
              control={control}
              rules={{ required: "This is a required field" }}
            />
            <Input
              name="city"
              label="City"
              errors={errors}
              control={control}
              rules={{ required: "This is a required field" }}
            />
            <Input
              name="emailAddress"
              label="Email Address"
              errors={errors}
              control={control}
              rules={{ required: "This is a required field" }}
            />
            <Input
              name="messages"
              label="Messages"
              errors={errors}
              control={control}
              rules={{ required: "This is a required field" }}
            />
            <Button as="GradientButton" label="Submit" />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Contact;
