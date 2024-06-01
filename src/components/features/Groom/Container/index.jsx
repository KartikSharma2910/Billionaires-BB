import { Box } from "@mui/material";
import { Card } from "components/common";
import { features } from "constants/features";
import styles from "./styles";

const Container = () => {
  const chips = [
    "Adventure Trekking",
    "Culinary Exploration",
    "reading books",
    "Digital Detox",
    "World Traveler",
    "Photography",
  ];

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.upperWrapper}>
        <Box sx={styles.upperWrapperLeft}>Behind the Veil</Box>
        <Box sx={styles.upperWrapperRight}>Legacy in Frames</Box>
      </Box>
      <Box sx={styles.bottomWrapper}>
        <Box
          sx={{
            ...styles.bottomWrapperBox,
            border: "1px solid rgba(252, 163, 17, 1)",
          }}
        >
          APPLY
        </Box>
        <Box
          sx={{
            ...styles.bottomWrapperBox,
            backgroundColor: "rgba(252, 163, 17, 0.75)",
          }}
        >
          EXPLORE
        </Box>
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.leftBox}>
          <Box sx={styles.headers}>ABOUT RAHUL Chatterjee</Box>
          <Box sx={styles.cardsWrapper}>
            {features.map((feature, index) => (
              <Card
                key={index}
                as="FeatureCard"
                customStyles={styles.card}
                {...feature}
              />
            ))}
          </Box>
          <Box sx={styles.containerBox}>
            <Box sx={styles.description}>
              Rahul is a man of remarkable depth and distinction, whose journey
              through life reflects a tapestry of growth, education, and
              unwavering commitment to excellence.
            </Box>
            <Box>
              <Box sx={styles.yellowHeader}>Educational Journey</Box>
              <Box sx={styles.description}>
                Having embarked on a path of academic excellence from a young
                age, Rahul's thirst for knowledge led him to pursue higher
                education at esteemed institutions. Graduating with distinction,
                he emerged as a beacon of intellectual prowess, equipped with a
                rich tapestry of knowledge and wisdom.
              </Box>
            </Box>
            <Box>
              <Box sx={styles.yellowHeader}>Professional Ascendancy</Box>
              <Box sx={styles.description}>
                Guided by his insatiable curiosity and driven by ambition, Rahul
                ventured into the professional realm with a spirit of innovation
                and determination. His career trajectory is marked by notable
                achievements and leadership milestones, showcasing his ability
                to navigate complexities with finesse and foresight.
              </Box>
            </Box>
            <Box>
              <Box sx={styles.yellowHeader}>Personal Growth</Box>
              <Box sx={styles.description}>
                Beyond his academic and professional pursuits, Rahul's journey
                is enriched by profound personal growth and introspection. He
                embraces life's challenges as opportunities for learning and
                self-discovery, emerging stronger and more enlightened with each
                experience..
              </Box>
            </Box>
            <Box>
              <Box sx={styles.yellowHeader}>In Summary</Box>
              <Box sx={styles.description}>
                Rahul is more than just a man of achievements; he is a testament
                to the power of intellect, perseverance, and compassion. With
                his blend of academic brilliance, professional acumen, and
                charismatic presence, he stands as a beacon of inspiration and a
                true partner for life's journey.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.rightBox}>
          <Box sx={styles.headers}>NETWORTH</Box>
          <Box sx={styles.price}>₹125 crore</Box>
          <Box sx={styles.headers}>Hobbies</Box>
          <Box sx={styles.chipWrapper}>
            {chips.map((chip, index) => (
              <Box key={index} sx={styles.chip}>
                {chip}
              </Box>
            ))}
          </Box>
          <Box sx={styles.headers}>PAST AFFAIRS</Box>
          <Box sx={styles.containerBox}>
            <Box sx={styles.description}>
              Rahul reflects openly on a previous three-year relationship marked
              by personal growth and support, which ended due to unforeseen
              family circumstances on his partner's side. Despite the breakup,
              he treasures the lessons learned about love and commitment. Now,
              he seeks a partner who complements his adventurous spirit and
              supports his data-driven career. Ideal traits include
              independence, a love for adventure, understanding, respect for
              boundaries, and a commitment to quality time together.
            </Box>
            <Box sx={styles.description}>
              Rahul values strong family ties and seeks a partner who integrates
              well into his family life. He envisions a relationship that
              balances intellectual engagement with lighthearted fun, where both
              partners support each other's passions while creating shared
              experiences. This approach focuses on positivity and
              compatibility, highlighting the qualities Rahul desires in his
              future partner without dwelling on the specifics of his past
              relationship.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
