import { useStyles } from "@/components/Organization/style";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
const employees = [
  {
    name: "김대표",
    position: "대표",
    instagram: "https://instagram.com/kim",
    youtube: "https://youtube.com/kim",
  },
  {
    name: "이부장",
    position: "부장",
    instagram: "https://instagram.com/lee",
    youtube: "https://youtube.com/lee",
  },
  {
    name: "박차장",
    position: "차장",
    instagram: "https://instagram.com/park",
    youtube: "https://youtube.com/park",
  },
  {
    name: "박차장",
    position: "차장",
    instagram: "https://instagram.com/park",
    youtube: "https://youtube.com/park",
  },
  {
    name: "최과장",
    position: "과장",
    instagram: "https://instagram.com/choi",
    youtube: "https://youtube.com/choi",
  },
  {
    name: "정주임",
    position: "주임",
    instagram: "https://instagram.com/jung",
    youtube: "https://youtube.com/jung",
  },
  {
    name: "홍사원",
    position: "사원",
    instagram: "https://instagram.com/hong",
    youtube: "https://youtube.com/hong",
  },
];

const positions = ["대표", "부장", "차장", "과장", "주임", "사원"];

export const Organization = () => {
  const { styles } = useStyles();
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>회사 계급표</h1>
      <div className={styles.hierarchy}>
        {positions.map((position) => (
          <div key={position} className={styles.positionContainer}>
            <h2 className={styles.positionTitle}>{position}</h2>
            {employees
              .filter((employee) => employee.position === position)
              .map((employee) => (
                <div key={employee.name} className={styles.employeeCard}>
                  <Image
                    src={"/test.png"}
                    width={100}
                    height={100}
                    alt={employee.name}
                    className={styles.profileImage}
                  />
                  <div className={styles.name}>{employee.name} (+188)</div>
                  <div className={styles.socialIcons}>
                    <a
                      href={employee.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={employee.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                  <div className={styles.positionBadge}>
                    {employee.position}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
