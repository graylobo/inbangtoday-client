import { createStyles, css } from "antd-style";

export const useStyles = createStyles(() => ({
  container: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,

  header: css`
    text-align: center;
    margin-bottom: 40px;
    font-size: 2em;
    color: #333;
  `,

  hierarchy: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  positionContainer: css`
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `,

  positionTitle: css`
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  `,

  employeeCard: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: #fff;
    color: #333;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out, background-color 0.2s;
    &:hover {
      transform: translateY(-10px);
      background-color: #f0f0f0;
    }
  `,

  profileImage: css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  `,

  name: css`
    font-size: 1.2em;
    margin-bottom: 5px;
  `,

  socialIcons: css`
    display: flex;
    gap: 10px;
    font-size: 1.5em;
    margin-bottom: 10px;
    a {
      color: #555;
      transition: color 0.2s;
      &:hover {
        color: #ff9800;
      }
    }
  `,

  positionBadge: css`
    background-color: #0073e6;
    color: #fff;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 0.9em;
  `,
}));
