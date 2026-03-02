import styles from "./FeatureItem.module.css";

type FeatureItemProps = {
  icon: React.ReactNode; // лучше чем string
  title: string;
  description: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}