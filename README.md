![SANS AI Cybersecurity Hackathon](https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/257/082/datas/full_width.jpg)
# **IntrusiGen - AI-Powered Intrusion Detection System**  

IntrusiGen is an **AI-driven Intrusion Detection System (IDS)** designed to **enhance network security** by detecting cyber threats in **real time**. It leverages **Generative Adversarial Networks (GANs)** for **dataset balancing** and an **XGBoost classifier** for **precise anomaly detection**, ensuring organizations can **proactively defend their networks** against evolving cyber threats.  

---

## ✨ **What It Does**  

✅ **Data Upload & Visualization** – Users upload **network traffic datasets (CSV format)**, and IntrusiGen provides **instant visual insights**, displaying **feature distribution, class composition, and attack breakdowns**.  

✅ **Data Preprocessing & Balancing** – Applies **missing value handling, feature selection, normalization, and label encoding**. Uses **GANs** to generate synthetic samples, addressing **dataset imbalance** for improved detection accuracy.  

✅ **Intrusion Detection & Threat Analysis** – Utilizes an **XGBoost classifier** to analyze the balanced dataset, detecting cyber threats with **high precision and real-time efficiency**.  

✅ **Visualization & Reports** – Displays **detection results via tables, graphs, and reports** in an intuitive **React-based UI**, providing **actionable insights and real-time alerts**.  

---

## 📝 **Installation and Setup Guide**  

### **Step 1: Prerequisites**  
Ensure you have the following installed on your system:  
- **Python**  
- **Node.js & npm**  
- **Git (for cloning the repository)**  
- **MongoDB (for database storage)**  

### **Step 2: Clone the Repository**  
```bash
git clone (https://github.com/ShahxHussain/SANS_AI-Cybersecurity-Hackathon)
```
## **Step 3: Install Dependencies**  
### 🔹 **For Backend (Node.js & Python Shell)**  
```bash
cd Server
npm install
pip install -r requirements.txt
```

### 🔹 **For Frontend (React.js UI)**
```
cd intrusion-detection
npm install
```
### **Step 2: Clone the Repository**  
### 🔹 **Start the Backend Server**
```
cd Server
npm run dev
```

### 🔹 **Start the Frontend UI**
```
cd intrusion-detection
npm start
```

## 📂 **Project Structure**  
```
├── .git/
├── intrusion-detection/
│ ├── node_modules/
│ ├── public/
│ ├── src/
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ ├── README.md
├── Notebooks/
├── Server/
│ ├── binary_xgboost_model/
│ ├── Controllers/
│ ├── GANModel/
│ ├── graphs/
│ ├── Models/
│ ├── node_modules/
│ ├── Routes/
│ ├── uploads/
│ ├── .env
│ ├── .gitignore
│ ├── analyze_dataset.py
│ ├── Connection.js
│ ├── detection_script.py
│ ├── GANBalancing.py
│ ├── index.js
│ ├── package-lock.json
│ ├── package.json
│ ├── prepro.py
│ ├── procfile
│ ├── vercel.json
│ ├── .gitattributes
│ ├── README.md
```

## 🤝 **Contributing**  
We welcome contributions to **IntrusiGen**! Whether you're fixing bugs, adding new features, or improving documentation, your input is appreciated.  

### **How to Contribute:**  
1. **Fork the repository** by clicking the "Fork" button.  

2. **Clone your forked repository:**  
   ```
   git clone https://github.com/ShahxHussain/SANS_AI-Cybersecurity-Hackathon
   ```

4. **Create a Feature Branch:**  
    ```
    git checkout -b feature-name
    ```

5. **Make Changes & Commit:**  
    ```
    git commit -m "Add new feature"
    ```

6. **Push to Your Branch & Open a Pull Request:**  
    ```
    git push origin feature-name
    ```

7. **Submit a Pull Request (PR):**  
Submit a **Pull Request (PR)** to the original repository and describe your changes.

## 🙏 Thank You 
