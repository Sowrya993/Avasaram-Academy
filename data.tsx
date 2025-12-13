
import React from 'react';
import { Course } from './types';
import { Code, BarChart, Calculator, Database, Brain, Cpu, Eye, MessageSquare, Sparkles } from 'lucide-react';

export const DUMMY_COURSES: Course[] = [
  {
    id: '1',
    title: 'Python Programming Foundation',
    description: 'Master the foundational syntax, structures, and object-oriented concepts of Python 3. The perfect starting point for your coding journey.',
    level: 'Beginner',
    duration: '4 Weeks',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
    tags: ['Python', 'Coding', 'OOP'],
    modules: [1],
    detailedSyllabus: [
      {
        title: "Week 1: Fundamentals & Control Flow",
        days: [
          { day: "Day 1", topic: "Introduction to Python, Installing IDEs (VS Code), Writing First Script" },
          { day: "Day 2", topic: "Python Syntax, Variables, Data Types, and Type Conversion" },
          { day: "Day 3", topic: "Operators (Arithmetic, Logical) & Input/Output Operations" },
          { day: "Day 4", topic: "Conditional Statements (if, elif, else) & Practical Examples" },
          { day: "Day 5", topic: "Loops (for, while) & Range Function Mastery" },
          { day: "Day 6", topic: "Loop Control Statements (break, continue) & Nested Loops" },
          { day: "Day 7", topic: "Week 1 Challenge: Calculator & Pattern Printing" }
        ]
      },
      {
        title: "Week 2: Data Structures & Functions",
        days: [
          { day: "Day 8", topic: "Lists & Tuples: Slicing, Methods, and Immutability" },
          { day: "Day 9", topic: "Dictionaries & Sets: Key-Value Pairs and Operations" },
          { day: "Day 10", topic: "Comprehensions: List, Dictionary & Set" },
          { day: "Day 11", topic: "Functions: Arguments, Return Values, and Scope" },
          { day: "Day 12", topic: "Advanced Functions: Lambda, Map, Filter, Reduce" },
          { day: "Day 13", topic: "Modules, Packages, and Import System" },
          { day: "Day 14", topic: "Week 2 Challenge: Contact Management System" }
        ]
      },
      {
        title: "Week 3: Object-Oriented Programming",
        days: [
          { day: "Day 15", topic: "OOP Basics: Classes, Objects, __init__, self" },
          { day: "Day 16", topic: "Class vs Instance Variables & Methods" },
          { day: "Day 17", topic: "Inheritance, super(), and Method Overriding" },
          { day: "Day 18", topic: "Encapsulation, Polymorphism & Abstraction" },
          { day: "Day 19", topic: "Error Handling: try-except, finally, Custom Exceptions" },
          { day: "Day 20", topic: "File Handling: Reading/Writing TXT, CSV, JSON" },
          { day: "Day 21", topic: "Week 3 Challenge: Banking System Simulation" }
        ]
      },
      {
        title: "Week 4: Advanced Topics & Capstone",
        days: [
          { day: "Day 22", topic: "Iterators, Generators & yield keyword" },
          { day: "Day 23", topic: "Decorators & Properties" },
          { day: "Day 24", topic: "Context Managers (with) & Date/Time Module" },
          { day: "Day 25", topic: "Introduction to Databases (SQLite) with Python" },
          { day: "Day 26", topic: "Virtual Environments, PIP & Project Structure" },
          { day: "Day 27", topic: "Capstone Project: Implementation & Logic" },
          { day: "Day 28", topic: "Capstone Project: Testing, Debugging & Polish" },
          { day: "Day 29", topic: "Final Code Review & Best Practices" },
          { day: "Day 30", topic: "Course Wrap-up & Next Steps" }
        ]
      }
    ],
    projectSections: [
      {
        title: "Beginner Projects",
        projects: [
          { title: "Number Guessing Game", skills: "loops, conditionals, random module" },
          { title: "Basic Calculator (CLI)", skills: "functions, user input" },
          { title: "Unit Converter", skills: "variables, basic math" },
          { title: "Password Strength Checker", skills: "strings, conditions" },
          { title: "To-Do List (Console Based)", skills: "lists, CRUD operations" }
        ]
      },
      {
        title: "Intermediate Projects",
        projects: [
          { title: "Student Report Card Generator", skills: "dictionaries, loops, file handling" },
          { title: "Library Book Management (File Based)", skills: "data storage, searching, filtering" },
          { title: "Weather App (Using API)", skills: "requests, JSON, API integration" },
          { title: "Expense Tracker (CLI Version)", skills: "lists, dictionaries, file handling" },
          { title: "Quiz Application", skills: "functions, file I/O, random selection" }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Data Science & Analytics Core',
    description: 'Become a data wizard. Learn Data Analysis with Pandas, Advanced Statistics, SQL Database management, and Power BI reporting.',
    level: 'Intermediate',
    duration: '10 Weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['Pandas', 'SQL', 'Power BI', 'Stats'],
    modules: [2, 3, 4],
    detailedSyllabus: [
      {
        title: "Week 1: NumPy & Scientific Computing",
        days: [
          { day: "Day 1", topic: "Intro to Data Science Ecosystem (Anaconda, Jupyter)" },
          { day: "Day 2", topic: "NumPy Arrays vs Lists, Data Types" },
          { day: "Day 3", topic: "Array Operations: Indexing, Slicing, Broadcasting" },
          { day: "Day 4", topic: "Vectorized Operations & Math Functions" },
          { day: "Day 5", topic: "Reshaping, Stacking, Splitting Arrays" },
          { day: "Day 6", topic: "Random Number Generation & Statistics with NumPy" },
          { day: "Day 7", topic: "Week 1 Challenge: Image Manipulation using NumPy Arrays" }
        ]
      },
      {
        title: "Week 2: Pandas Foundations",
        days: [
          { day: "Day 8", topic: "Series & DataFrames Anatomy" },
          { day: "Day 9", topic: "Loading Data (CSV, Excel, JSON) & Basic Inspection" },
          { day: "Day 10", topic: "Indexing & Selection (loc, iloc)" },
          { day: "Day 11", topic: "Filtering Data & Boolean Indexing" },
          { day: "Day 12", topic: "Adding/Removing Columns & Renaming" },
          { day: "Day 13", topic: "Sorting & Ranking Data" },
          { day: "Day 14", topic: "Week 2 Challenge: Exploratory Analysis of a Dataset" }
        ]
      },
      {
        title: "Week 3: Data Wrangling & Cleaning",
        days: [
          { day: "Day 15", topic: "Handling Missing Data (Isnull, Dropna, Fillna)" },
          { day: "Day 16", topic: "Handling Duplicates & Data Type Conversion" },
          { day: "Day 17", topic: "String Manipulation (str accessor)" },
          { day: "Day 18", topic: "Apply, Map, and Applymap functions" },
          { day: "Day 19", topic: "GroupBy: Split-Apply-Combine Strategy" },
          { day: "Day 20", topic: "Merging, Joining, and Concatenating DataFrames" },
          { day: "Day 21", topic: "Week 3 Challenge: Cleaning a 'Dirty' Real-world Dataset" }
        ]
      },
      {
        title: "Week 4: Data Visualization",
        days: [
          { day: "Day 22", topic: "Anatomy of a Matplotlib Figure" },
          { day: "Day 23", topic: "Line Plots, Bar Charts, and Scatter Plots" },
          { day: "Day 24", topic: "Histograms & Box Plots for Distribution" },
          { day: "Day 25", topic: "Seaborn Basics & Aesthetics" },
          { day: "Day 26", topic: "Advanced Seaborn: Violin, Strip, Swarm plots" },
          { day: "Day 27", topic: "Heatmaps for Correlation & PairPlots" },
          { day: "Day 28", topic: "Week 4 Challenge: Visualizing Global Happiness Index" }
        ]
      },
      {
        title: "Week 5: Descriptive & Probability Statistics",
        days: [
          { day: "Day 29", topic: "Measures of Central Tendency & Dispersion" },
          { day: "Day 30", topic: "Probability Basics & Bayes Theorem" },
          { day: "Day 31", topic: "Probability Distributions (Normal, Binomial)" },
          { day: "Day 32", topic: "Z-Scores & The Empirical Rule" },
          { day: "Day 33", topic: "Sampling Methods & Central Limit Theorem" },
          { day: "Day 34", topic: "Confidence Intervals" },
          { day: "Day 35", topic: "Week 5 Challenge: Statistical Summary of Marketing Data" }
        ]
      },
      {
        title: "Week 6: Inferential Statistics",
        days: [
          { day: "Day 36", topic: "Hypothesis Testing Framework (Null vs Alt)" },
          { day: "Day 37", topic: "P-Values and Significance Levels" },
          { day: "Day 38", topic: "T-Tests (One-sample, Two-sample)" },
          { day: "Day 39", topic: "ANOVA (Analysis of Variance)" },
          { day: "Day 40", topic: "Chi-Square Test for Independence" },
          { day: "Day 41", topic: "Correlation vs Causation" },
          { day: "Day 42", topic: "Week 6 Challenge: A/B Testing Analysis Project" }
        ]
      },
      {
        title: "Week 7: SQL Databases",
        days: [
          { day: "Day 43", topic: "Introduction to RDBMS & SQL Syntax" },
          { day: "Day 44", topic: "SELECT, WHERE, ORDER BY, LIMIT" },
          { day: "Day 45", topic: "Aggregate Functions (COUNT, SUM, AVG)" },
          { day: "Day 46", topic: "GROUP BY and HAVING Clauses" },
          { day: "Day 47", topic: "JOINS (Inner, Left, Right, Full)" },
          { day: "Day 48", topic: "Subqueries and Nested Queries" },
          { day: "Day 49", topic: "Week 7 Challenge: Analyzing Employee Database" }
        ]
      },
      {
        title: "Week 8: Advanced SQL",
        days: [
          { day: "Day 50", topic: "Window Functions (RANK, ROW_NUMBER)" },
          { day: "Day 51", topic: "String & Date Functions in SQL" },
          { day: "Day 52", topic: "Common Table Expressions (CTEs)" },
          { day: "Day 53", topic: "Views & Stored Procedures Basics" },
          { day: "Day 54", topic: "Data Integrity & Normalization (1NF, 2NF, 3NF)" },
          { day: "Day 55", topic: "Connecting Python to SQL (SQLAlchemy)" },
          { day: "Day 56", topic: "Week 8 Challenge: Digital Music Store Analysis" }
        ]
      },
      {
        title: "Week 9: Power BI & Business Intelligence",
        days: [
          { day: "Day 57", topic: "Power BI Interface & Connecting Data" },
          { day: "Day 58", topic: "Power Query (ETL) Transformations" },
          { day: "Day 59", topic: "Data Modeling & Star Schema" },
          { day: "Day 60", topic: "DAX Basics: Calculated Columns vs Measures" },
          { day: "Day 61", topic: "Time Intelligence Functions in DAX" },
          { day: "Day 62", topic: "Building Interactive Visuals & Slicers" },
          { day: "Day 63", topic: "Week 9 Challenge: Sales Executive Dashboard" }
        ]
      },
      {
        title: "Week 10: Capstone Project",
        days: [
          { day: "Day 64", topic: "Project Definition & Dataset Selection" },
          { day: "Day 65", topic: "Data Cleaning & Preprocessing Phase" },
          { day: "Day 66", topic: "Exploratory Data Analysis (SQL + Python)" },
          { day: "Day 67", topic: "Statistical Analysis & Hypothesis Testing" },
          { day: "Day 68", topic: "Dashboard Creation (Power BI)" },
          { day: "Day 69", topic: "Final Report & Insights Presentation" },
          { day: "Day 70", topic: "Course Wrap-up & Portfolio Building" }
        ]
      }
    ],
    projectSections: [
      {
        title: "Data Analysis Projects",
        projects: [
          { title: "Titanic EDA", skills: "Pandas, Matplotlib, Data Cleaning" },
          { title: "Stock Price Visualizer", skills: "Time Series, Plotly, Pandas" },
          { title: "Zomato Restaurant Analysis", skills: "Geospatial Data, Seaborn" },
          { title: "Employee Retention Study", skills: "SQL, Hypothesis Testing" }
        ]
      },
      {
        title: "BI & Dashboard Projects",
        projects: [
          { title: "E-commerce Sales Dashboard", skills: "Power BI, DAX, Modeling" },
          { title: "COVID-19 Global Tracker", skills: "ETL, Data Transformation" },
          { title: "Digital Music Store Case Study", skills: "Advanced SQL, Subqueries" },
          { title: "HR Analytics Report", skills: "Data Storytelling, KPIs" }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Machine Learning Specialist',
    description: 'Build predictive models using Supervised and Unsupervised learning. Master Regression, Classification, Clustering, and PCA.',
    level: 'Advanced',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    tags: ['Scikit-Learn', 'Algorithms', 'Modeling'],
    modules: [5],
    detailedSyllabus: [
      {
        title: "Week 1: ML Foundations & Data Prep",
        days: [
          { day: "Day 1", topic: "Introduction to ML: AI vs ML vs DL, Types of Learning" },
          { day: "Day 2", topic: "The ML Pipeline & Scikit-Learn Environment Setup" },
          { day: "Day 3", topic: "Data Preprocessing: Handling Missing Values (Simple & Iterative Imputer)" },
          { day: "Day 4", topic: "Encoding Categorical Data: One-Hot, Label, Ordinal Encoding" },
          { day: "Day 5", topic: "Feature Scaling: Standardization vs Normalization (MinMax)" },
          { day: "Day 6", topic: "Data Splitting Strategies: Train-Test Split, Stratified Sampling" },
          { day: "Day 7", topic: "Week 1 Challenge: End-to-End Preprocessing Pipeline on Titanic Dataset" }
        ]
      },
      {
        title: "Week 2: Regression Analysis (Supervised)",
        days: [
          { day: "Day 8", topic: "Simple Linear Regression: Math (Gradient Descent) & Implementation" },
          { day: "Day 9", topic: "Multiple Linear Regression & Assumptions Checks" },
          { day: "Day 10", topic: "Polynomial Regression & The Bias-Variance Tradeoff" },
          { day: "Day 11", topic: "Regularization I: Ridge Regression (L2 Penalty)" },
          { day: "Day 12", topic: "Regularization II: Lasso (L1) & ElasticNet" },
          { day: "Day 13", topic: "Regression Metrics: MAE, MSE, RMSE, R-Squared, Adjusted R2" },
          { day: "Day 14", topic: "Week 2 Challenge: House Price Prediction Model Competition" }
        ]
      },
      {
        title: "Week 3: Classification Algorithms",
        days: [
          { day: "Day 15", topic: "Logistic Regression: Sigmoid Function & Decision Boundaries" },
          { day: "Day 16", topic: "K-Nearest Neighbors (KNN): Distance Metrics & Choosing 'K'" },
          { day: "Day 17", topic: "Naive Bayes Classifiers: Gaussian vs Multinomial" },
          { day: "Day 18", topic: "Evaluation Metrics I: Confusion Matrix & Accuracy Paradox" },
          { day: "Day 19", topic: "Evaluation Metrics II: Precision, Recall, F1-Score" },
          { day: "Day 20", topic: "ROC Curve, AUC Score & Threshold Tuning" },
          { day: "Day 21", topic: "Week 3 Challenge: Diabetes Prediction System" }
        ]
      },
      {
        title: "Week 4: SVM & Decision Trees",
        days: [
          { day: "Day 22", topic: "Support Vector Machines (SVM): Hyperplanes & Margins" },
          { day: "Day 23", topic: "SVM Kernels: Polynomial, RBF (Radial Basis Function)" },
          { day: "Day 24", topic: "Decision Trees: Entropy, Information Gain, Gini Impurity" },
          { day: "Day 25", topic: "Visualizing Trees & Pruning (Pre vs Post Pruning)" },
          { day: "Day 26", topic: "Grid Search & Randomized Search for Hyperparameters" },
          { day: "Day 27", topic: "Cross-Validation Techniques (K-Fold, Stratified K-Fold)" },
          { day: "Day 28", topic: "Week 4 Challenge: Breast Cancer Classification" }
        ]
      },
      {
        title: "Week 5: Ensemble Learning",
        days: [
          { day: "Day 29", topic: "Introduction to Ensembles: Bagging vs Boosting" },
          { day: "Day 30", topic: "Random Forest: Architecture & Out-of-Bag Error" },
          { day: "Day 31", topic: "Feature Importance Analysis with Random Forest" },
          { day: "Day 32", topic: "AdaBoost: Adaptive Boosting Intuition & Weights" },
          { day: "Day 33", topic: "Gradient Boosting Machines (GBM)" },
          { day: "Day 34", topic: "Stacking & Voting Classifiers" },
          { day: "Day 35", topic: "Week 5 Challenge: Loan Default Prediction" }
        ]
      },
      {
        title: "Week 6: Advanced Algorithms & Tuning",
        days: [
          { day: "Day 36", topic: "XGBoost: Architecture & Regularization parameters" },
          { day: "Day 37", topic: "LightGBM & CatBoost for Categorical Data" },
          { day: "Day 38", topic: "Building Robust Scikit-Learn Pipelines" },
          { day: "Day 39", topic: "Handling Imbalanced Datasets (SMOTE, Undersampling)" },
          { day: "Day 40", topic: "Dimensionality Reduction: PCA Intuition & Math" },
          { day: "Day 41", topic: "PCA for Visualization & Noise Reduction" },
          { day: "Day 42", topic: "Week 6 Challenge: Customer Churn Prediction (High Accuracy)" }
        ]
      },
      {
        title: "Week 7: Unsupervised Learning",
        days: [
          { day: "Day 43", topic: "Clustering: K-Means Algorithm & Elbow Method" },
          { day: "Day 44", topic: "Hierarchical Clustering: Dendrograms & Linkage" },
          { day: "Day 45", topic: "DBSCAN: Density-Based Spatial Clustering" },
          { day: "Day 46", topic: "Anomaly Detection: Isolation Forest" },
          { day: "Day 47", topic: "Association Rule Learning: Apriori Algorithm" },
          { day: "Day 48", topic: "Recommender Systems Basics (Collaborative Filtering)" },
          { day: "Day 49", topic: "Week 7 Challenge: Customer Market Segmentation" }
        ]
      },
      {
        title: "Week 8: Deployment & Capstone",
        days: [
          { day: "Day 50", topic: "Model Serialization: Pickle & Joblib" },
          { day: "Day 51", topic: "Introduction to Streamlit for Data Apps" },
          { day: "Day 52", topic: "Building a Prediction API with FastAPI" },
          { day: "Day 53", topic: "Capstone Project: Problem Definition & Data Gathering" },
          { day: "Day 54", topic: "Capstone Project: EDA, Modeling & Optimization" },
          { day: "Day 55", topic: "Capstone Project: Frontend Dashboard & Deployment" },
          { day: "Day 56", topic: "Final Presentation & Course Wrap-up" }
        ]
      }
    ],
    projectSections: [
      {
        title: "ML Projects (Beginner)",
        projects: [
          { title: "House Price Predictor", skills: "Linear Regression, Pandas" },
          { title: "Iris Flower Classifier", skills: "KNN, Scikit-Learn" },
          { title: "Spam Email Filter", skills: "Naive Bayes, NLP Basics" },
          { title: "Wine Quality Checker", skills: "Decision Trees, GridSearch" },
          { title: "Stock Trend Forecaster", skills: "Regression, Matplotlib" }
        ]
      },
      {
        title: "ML Projects (Advanced)",
        projects: [
          { title: "Customer Segmentation Engine", skills: "K-Means, PCA, Seaborn" },
          { title: "Credit Card Fraud Detector", skills: "XGBoost, Anomaly Detection" },
          { title: "Movie Recommendation System", skills: "Collaborative Filtering, Cosine Similarity" },
          { title: "Heart Disease Prediction App", skills: "Random Forest, Streamlit Deployment" },
          { title: "Handwritten Digit Recognizer", skills: "SVM, Image Flattening" }
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Deep Learning Architect',
    description: 'Dive deep into Neural Networks. Master Forward/Backward propagation, Optimizers, and build models with TensorFlow & Keras.',
    level: 'Advanced',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['Deep Learning', 'TensorFlow', 'Keras'],
    modules: [6],
    detailedSyllabus: [
      {
        title: "Week 1: Neural Network Foundations",
        days: [
          { day: "Day 1", topic: "Introduction to DL vs ML, Biological vs Artificial Neurons" },
          { day: "Day 2", topic: "Perceptrons & The Universal Approximation Theorem" },
          { day: "Day 3", topic: "Activation Functions: Sigmoid, Tanh, ReLU, Softmax" },
          { day: "Day 4", topic: "Building a Multi-Layer Perceptron (MLP) from Scratch" },
          { day: "Day 5", topic: "Forward Propagation Logic & Matrix Operations" },
          { day: "Day 6", topic: "Loss Functions: MSE, Cross-Entropy (Binary vs Categorical)" },
          { day: "Day 7", topic: "Week 1 Challenge: Building a XOR Gate Neural Net" }
        ]
      },
      {
        title: "Week 2: Training Mechanics & Optimization",
        days: [
          { day: "Day 8", topic: "Gradient Descent Intuition & The Chain Rule" },
          { day: "Day 9", topic: "Backpropagation Algorithm Detailed Walkthrough" },
          { day: "Day 10", topic: "TensorFlow & Keras Basics: Sequential API" },
          { day: "Day 11", topic: "Stochastic vs Mini-Batch Gradient Descent" },
          { day: "Day 12", topic: "Optimizers: Momentum, RMSProp, Adam" },
          { day: "Day 13", topic: "Learning Rate Schedules & Decay" },
          { day: "Day 14", topic: "Week 2 Challenge: MNIST Digit Classification" }
        ]
      },
      {
        title: "Week 3: Regularization & Tuning",
        days: [
          { day: "Day 15", topic: "The Problem of Overfitting in Deep Networks" },
          { day: "Day 16", topic: "L1 & L2 Regularization (Weight Decay)" },
          { day: "Day 17", topic: "Dropout Layers: Concept & Implementation" },
          { day: "Day 18", topic: "Data Augmentation strategies with Keras" },
          { day: "Day 19", topic: "Batch Normalization: Theory & Placement" },
          { day: "Day 20", topic: "Early Stopping & Model Checkpointing Callbacks" },
          { day: "Day 21", topic: "Week 3 Challenge: Fashion MNIST High-Accuracy Model" }
        ]
      },
      {
        title: "Week 4: Convolutional Neural Networks (CNN)",
        days: [
          { day: "Day 22", topic: "Introduction to Computer Vision & Image Data" },
          { day: "Day 23", topic: "Convolution Operation: Kernels, Filters, Edge Detection" },
          { day: "Day 24", topic: "Padding (Valid vs Same) & Strides" },
          { day: "Day 25", topic: "Pooling Layers (Max, Average) & Flattening" },
          { day: "Day 26", topic: "Building a CNN Architecture from Scratch" },
          { day: "Day 27", topic: "Visualizing Feature Maps & Activations" },
          { day: "Day 28", topic: "Week 4 Challenge: CIFAR-10 Image Classification" }
        ]
      },
      {
        title: "Week 5: Advanced CNN Architectures",
        days: [
          { day: "Day 29", topic: "Classic Networks: LeNet-5 & AlexNet" },
          { day: "Day 30", topic: "VGG-16 & VGG-19: Deep Architectures" },
          { day: "Day 31", topic: "ResNet: Skip Connections & Residual Blocks" },
          { day: "Day 32", topic: "Inception Network (GoogLeNet) & 1x1 Convolutions" },
          { day: "Day 33", topic: "Transfer Learning: Feature Extraction vs Fine-Tuning" },
          { day: "Day 34", topic: "Using Pre-trained Models (Keras Applications)" },
          { day: "Day 35", topic: "Week 5 Challenge: Cat vs Dog Classifier with Transfer Learning" }
        ]
      },
      {
        title: "Week 6: Recurrent Neural Networks (RNN)",
        days: [
          { day: "Day 36", topic: "Sequence Data & RNN Architecture" },
          { day: "Day 37", topic: "Backpropagation Through Time (BPTT) & Vanishing Gradients" },
          { day: "Day 38", topic: "Long Short-Term Memory (LSTM) Units" },
          { day: "Day 39", topic: "Gated Recurrent Units (GRU)" },
          { day: "Day 40", topic: "Bidirectional RNNs & Deep RNNs" },
          { day: "Day 41", topic: "Word Embeddings Basics (Embedding Layer)" },
          { day: "Day 42", topic: "Week 6 Challenge: Movie Review Sentiment Analysis" }
        ]
      },
      {
        title: "Week 7: Advanced Deep Learning Topics",
        days: [
          { day: "Day 43", topic: "Functional API in Keras for Complex Architectures" },
          { day: "Day 44", topic: "Autoencoders: Architecture & Denoising" },
          { day: "Day 45", topic: "Variational Autoencoders (VAE) intuition" },
          { day: "Day 46", topic: "Generative Adversarial Networks (GANs) Basics" },
          { day: "Day 47", topic: "Object Detection Concepts (YOLO overview)" },
          { day: "Day 48", topic: "Semantic Segmentation Concepts (UNet overview)" },
          { day: "Day 49", topic: "Week 7 Challenge: Image Noise Reduction with Autoencoders" }
        ]
      },
      {
        title: "Week 8: Capstone Project & Deployment",
        days: [
          { day: "Day 50", topic: "Capstone Selection: Image, Text, or Time-Series?" },
          { day: "Day 51", topic: "Data Pipeline Construction (tf.data)" },
          { day: "Day 52", topic: "Model Architecture Design & Experimentation" },
          { day: "Day 53", topic: "Hyperparameter Tuning with Keras Tuner" },
          { day: "Day 54", topic: "Serving Models with TensorFlow Lite / TF Serving" },
          { day: "Day 55", topic: "Building a Demo Web App (Streamlit/Flask)" },
          { day: "Day 56", topic: "Final Project Presentation & Code Review" }
        ]
      }
    ],
    projectSections: [
      {
        title: "Beginner DL Projects",
        projects: [
          { title: "Handwritten Digit Recognizer", skills: "MLP, Dense Layers, MNIST" },
          { title: "Fashion Item Classifier", skills: "CNN Basics, FashionMNIST" },
          { title: "Binary Sentiment Analyzer", skills: "Simple RNN, Embedding Layer" },
          { title: "Dog Breed Identification", skills: "Transfer Learning, MobileNet" }
        ]
      },
      {
        title: "Advanced DL Projects",
        projects: [
          { title: "Real-time Face Mask Detector", skills: "OpenCV, CNN, Video Processing" },
          { title: "Stock Price Predictor", skills: "LSTM, Time-Series Forecasting" },
          { title: "Neural Style Transfer", skills: "VGG19, Loss Function Engineering" },
          { title: "Image Caption Generator", skills: "CNN + LSTM (Encoder-Decoder)" }
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Computer Vision Engineering',
    description: 'Teach machines to see. Learn Image Preprocessing with OpenCV, CNN architectures, Object Detection (YOLO), and Transfer Learning.',
    level: 'Advanced',
    duration: '8 Weeks',
    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&q=80&w=800',
    tags: ['Computer Vision', 'OpenCV', 'CNN', 'YOLO'],
    modules: [7],
    detailedSyllabus: [
      {
        title: "Week 1: OpenCV Foundations & Image Basics",
        days: [
          { day: "Day 1", topic: "Computer Vision Setup: OpenCV, NumPy, Matplotlib" },
          { day: "Day 2", topic: "Reading, Displaying, and Writing Images & Videos" },
          { day: "Day 3", topic: "Understanding Pixels, Colorspaces (RGB, HSV, Grayscale)" },
          { day: "Day 4", topic: "Drawing on Images: Lines, Rectangles, Circles, Text" },
          { day: "Day 5", topic: "Image Arithmetic & Bitwise Operations (Masking)" },
          { day: "Day 6", topic: "Image Resizing, Translation, Rotation, Flipping" },
          { day: "Day 7", topic: "Week 1 Challenge: Create a Virtual Painting App" }
        ]
      },
      {
        title: "Week 2: Image Processing & Enhancement",
        days: [
          { day: "Day 8", topic: "Image Thresholding (Simple, Adaptive, Otsu)" },
          { day: "Day 9", topic: "Smoothing & Blurring (Gaussian, Median, Bilateral)" },
          { day: "Day 10", topic: "Gradients & Edge Detection (Sobel, Laplacian, Canny)" },
          { day: "Day 11", topic: "Morphological Operations (Erosion, Dilation, Opening, Closing)" },
          { day: "Day 12", topic: "Histograms: Calculation, Visualization, Equalization" },
          { day: "Day 13", topic: "Perspective Transforms (Bird's Eye View)" },
          { day: "Day 14", topic: "Week 2 Challenge: Document Scanner Utility" }
        ]
      },
      {
        title: "Week 3: Contours & Feature Detection",
        days: [
          { day: "Day 15", topic: "Finding & Drawing Contours" },
          { day: "Day 16", topic: "Contour Properties: Area, Perimeter, Center of Mass" },
          { day: "Day 17", topic: "Shape Detection & Approximation" },
          { day: "Day 18", topic: "Template Matching" },
          { day: "Day 19", topic: "Feature Detection: Harris Corner, Shi-Tomasi" },
          { day: "Day 20", topic: "Keypoint Detectors: SIFT, SURF, ORB" },
          { day: "Day 21", topic: "Week 3 Challenge: Coin Counter & Classifier" }
        ]
      },
      {
        title: "Week 4: Deep Learning for Vision (CNN Recap)",
        days: [
          { day: "Day 22", topic: "CNN Architecture Review: Conv, Pool, FC layers" },
          { day: "Day 23", topic: "Data Augmentation for Vision (Keras/Albumentations)" },
          { day: "Day 24", topic: "Transfer Learning Strategies: Feature Extraction" },
          { day: "Day 25", topic: "Fine-tuning Pre-trained Models (VGG, ResNet)" },
          { day: "Day 26", topic: "Visualizing CNN Filters & Heatmaps (Grad-CAM)" },
          { day: "Day 27", topic: "Handling Multi-class vs Multi-label classification" },
          { day: "Day 28", topic: "Week 4 Challenge: Custom Landmark Classifier" }
        ]
      },
      {
        title: "Week 5: Face Detection & Recognition",
        days: [
          { day: "Day 29", topic: "Haar Cascades for Face Detection (Classic Approach)" },
          { day: "Day 30", topic: "Deep Learning Face Detection (MTCNN, DNN module)" },
          { day: "Day 31", topic: "Facial Landmark Detection (Dlib, MediaPipe)" },
          { day: "Day 32", topic: "Face Recognition: Embeddings & Triplet Loss" },
          { day: "Day 33", topic: "Building a Face Recognition Pipeline" },
          { day: "Day 34", topic: "Real-time Anti-spoofing Techniques" },
          { day: "Day 35", topic: "Week 5 Challenge: Automated Attendance System" }
        ]
      },
      {
        title: "Week 6: Object Detection Architectures",
        days: [
          { day: "Day 36", topic: "Understanding Object Detection: Localization vs Classification" },
          { day: "Day 37", topic: "Sliding Windows & Region Proposals (R-CNN basics)" },
          { day: "Day 38", topic: "Single Shot Detectors (SSD) & YOLO Intuition" },
          { day: "Day 39", topic: "YOLOv8: Architecture, Anchors, and Loss" },
          { day: "Day 40", topic: "Training YOLOv8 on Custom Datasets (Roboflow)" },
          { day: "Day 41", topic: "Metrics: IoU (Intersection over Union) & mAP" },
          { day: "Day 42", topic: "Week 6 Challenge: PPE (Hardhat/Vest) Detection" }
        ]
      },
      {
        title: "Week 7: Segmentation & Tracking",
        days: [
          { day: "Day 43", topic: "Semantic Segmentation with U-Net" },
          { day: "Day 44", topic: "Instance Segmentation with Mask R-CNN" },
          { day: "Day 45", topic: "Object Tracking: Centroid Tracking & Kalman Filters" },
          { day: "Day 46", topic: "DeepSORT for Multi-Object Tracking" },
          { day: "Day 47", topic: "Pose Estimation (MediaPipe/OpenPose)" },
          { day: "Day 48", topic: "Optical Flow for Motion Detection" },
          { day: "Day 49", topic: "Week 7 Challenge: Vehicle Speed Estimation" }
        ]
      },
      {
        title: "Week 8: Capstone & Deployment",
        days: [
          { day: "Day 50", topic: "Capstone: Selecting a Real-world Problem" },
          { day: "Day 51", topic: "Optimizing Models for Edge: Quantization & Pruning" },
          { day: "Day 52", topic: "Deploying Vision Models with Flask/FastAPI" },
          { day: "Day 53", topic: "TensorFlow Lite for Mobile Deployment" },
          { day: "Day 54", topic: "ONNX Runtime for Cross-platform Inference" },
          { day: "Day 55", topic: "Building the Final Dashboard/App Interface" },
          { day: "Day 56", topic: "Final Demo Day & Portfolio Polish" }
        ]
      }
    ],
    projectSections: [
      {
        title: "Computer Vision Projects (Beginner)",
        projects: [
          { title: "Invisible Cloak (Harry Potter)", skills: "Color Segmentation, Masking, OpenCV" },
          { title: "Document Scanner", skills: "Perspective Transform, Contours, Thresholding" },
          { title: "Lane Line Detection", skills: "Hough Transform, Canny Edge Detection" },
          { title: "Color Picker Tool", skills: "Trackbars, HSV Color Space" },
          { title: "Virtual Paint", skills: "Contour Detection, Drawing Functions" }
        ]
      },
      {
        title: "Computer Vision Projects (Advanced)",
        projects: [
          { title: "Social Distance Monitor", skills: "YOLO Object Detection, Euclidean Distance" },
          { title: "Face Recognition Attendance", skills: "Face Embeddings, Database Integration" },
          { title: "AI Personal Trainer (Pose)", skills: "MediaPipe Pose, Trigonometry, Angle Calculation" },
          { title: "Traffic Counter & Tracker", skills: "Background Subtraction, Object Tracking" },
          { title: "Gesture Volume Control", skills: "Hand Tracking, System Volume Control" }
        ]
      }
    ]
  },
  {
     id: '6',
     title: 'NLP & Generative AI',
     description: 'The frontier of AI. Master Natural Language Processing, Transformers (BERT), and build applications with LLMs & Gemini.',
     level: 'Advanced',
     duration: '8 Weeks',
     image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800',
     tags: ['NLP', 'GenAI', 'LLMs', 'Prompt Engineering'],
     modules: [8, 9],
     detailedSyllabus: [
      {
        title: "Week 1: NLP Foundations & Text Processing",
        days: [
          { day: "Day 1", topic: "Introduction to NLP & Python Libraries (NLTK, Spacy)" },
          { day: "Day 2", topic: "Text Preprocessing: Tokenization, Stemming vs Lemmatization" },
          { day: "Day 3", topic: "Regex for Pattern Matching & Cleaning" },
          { day: "Day 4", topic: "Feature Extraction: Bag of Words (BoW) & CountVectorizer" },
          { day: "Day 5", topic: "TF-IDF (Term Frequency-Inverse Document Frequency)" },
          { day: "Day 6", topic: "Text Classification with Naive Bayes (Spam vs Ham)" },
          { day: "Day 7", topic: "Week 1 Challenge: Building a Resume Parser" }
        ]
      },
      {
        title: "Week 2: Word Embeddings & Semantics",
        days: [
          { day: "Day 8", topic: "Limitations of BoW & Introduction to Vector Space Models" },
          { day: "Day 9", topic: "Word2Vec: CBOW vs Skip-Gram Architectures" },
          { day: "Day 10", topic: "GloVe (Global Vectors) & FastText" },
          { day: "Day 11", topic: "Cosine Similarity & Semantic Search Intuition" },
          { day: "Day 12", topic: "Visualizing Embeddings with t-SNE" },
          { day: "Day 13", topic: "Using Pre-trained Embeddings in Keras" },
          { day: "Day 14", topic: "Week 2 Challenge: Movie Review Sentiment Analysis" }
        ]
      },
      {
        title: "Week 3: Sequence Models (RNNs)",
        days: [
          { day: "Day 15", topic: "Recurrent Neural Networks (RNN) Mechanics" },
          { day: "Day 16", topic: "The Vanishing Gradient Problem" },
          { day: "Day 17", topic: "LSTMs (Long Short-Term Memory) Gates Explained" },
          { day: "Day 18", topic: "GRUs (Gated Recurrent Units) vs LSTMs" },
          { day: "Day 19", topic: "Bi-Directional RNNs for Context" },
          { day: "Day 20", topic: "Sequence-to-Sequence (Seq2Seq) Architecture" },
          { day: "Day 21", topic: "Week 3 Challenge: Next Word Prediction Model" }
        ]
      },
      {
        title: "Week 4: The Transformer Revolution",
        days: [
          { day: "Day 22", topic: "Limitations of RNNs & The 'Attention Is All You Need' Paper" },
          { day: "Day 23", topic: "Self-Attention Mechanism (Query, Key, Value)" },
          { day: "Day 24", topic: "Multi-Head Attention & Positional Encoding" },
          { day: "Day 25", topic: "Encoder-Only Models: BERT (Bidirectional Encoder Representations)" },
          { day: "Day 26", topic: "Decoder-Only Models: GPT Architecture" },
          { day: "Day 27", topic: "Encoder-Decoder Models: T5 & Bart" },
          { day: "Day 28", topic: "Week 4 Challenge: Language Translation with Transformers" }
        ]
      },
      {
        title: "Week 5: Large Language Models (LLMs)",
        days: [
          { day: "Day 29", topic: "Pre-training vs Fine-tuning Paradigms" },
          { day: "Day 30", topic: "Prompt Engineering: Zero-shot, Few-shot, Chain of Thought" },
          { day: "Day 31", topic: "Working with OpenAI API (GPT-3.5/4)" },
          { day: "Day 32", topic: "Working with Google Gemini API (Multimodal)" },
          { day: "Day 33", topic: "System Instructions & Persona Building" },
          { day: "Day 34", topic: "Function Calling & Tools Integration" },
          { day: "Day 35", topic: "Week 5 Challenge: Building a Specialized Chatbot" }
        ]
      },
      {
        title: "Week 6: LangChain & Orchestration",
        days: [
          { day: "Day 36", topic: "LangChain Basics: Chains, Prompts, Output Parsers" },
          { day: "Day 37", topic: "Memory Modules (Buffer, Window, Summary)" },
          { day: "Day 38", topic: "LangChain Agents & Custom Tools" },
          { day: "Day 39", topic: "Document Loaders & Splitting Strategies" },
          { day: "Day 40", topic: "Building Retrieval Chains" },
          { day: "Day 41", topic: "Streamlit UI for LLM Apps" },
          { day: "Day 42", topic: "Week 6 Challenge: PDF Summarizer Tool" }
        ]
      },
      {
        title: "Week 7: RAG (Retrieval Augmented Generation)",
        days: [
          { day: "Day 43", topic: "RAG Intuition: Overcoming LLM Hallucinations" },
          { day: "Day 44", topic: "Vector Databases: Pinecone, ChromaDB, FAISS" },
          { day: "Day 45", topic: "Embedding Generation & Storage" },
          { day: "Day 46", topic: "Semantic Search & Retrieval Techniques" },
          { day: "Day 47", topic: "Advanced RAG: Hybrid Search & Re-ranking" },
          { day: "Day 48", topic: "Evaluation Frameworks (RAGAS)" },
          { day: "Day 49", topic: "Week 7 Challenge: Chat with Your Data (Knowledge Base)" }
        ]
      },
      {
        title: "Week 8: Fine-Tuning & Production",
        days: [
          { day: "Day 50", topic: "PEFT (Parameter-Efficient Fine-Tuning) & LoRA" },
          { day: "Day 51", topic: "Quantization (QLoRA) for consumer GPUs" },
          { day: "Day 52", topic: "Fine-tuning Llama 3 on Custom Dataset" },
          { day: "Day 53", topic: "RLHF (Reinforcement Learning from Human Feedback) Concepts" },
          { day: "Day 54", topic: "Deployment Strategies (HuggingFace Spaces, AWS)" },
          { day: "Day 55", topic: "Ethics, Bias, and Safety in AI" },
          { day: "Day 56", topic: "Final Capstone Presentation" }
        ]
      }
    ],
    projectSections: [
      {
        title: "NLP Projects",
        projects: [
          { title: "Spam/Ham Classifier", skills: "Naive Bayes, TF-IDF" },
          { title: "Sentiment Analyzer", skills: "NLTK, VADER, TextBlob" },
          { title: "Topic Modeling (LDA)", skills: "Gensim, Unsupervised Learning" },
          { title: "Named Entity Recognizer", skills: "Spacy, Custom Training" },
          { title: "Language Translator", skills: "Seq2Seq, Attention" }
        ]
      },
      {
        title: "GenAI Projects",
        projects: [
          { title: "Personal Knowledge Assistant (RAG)", skills: "LangChain, Pinecone, OpenAI" },
          { title: "YouTube Video Summarizer", skills: "Whisper API, Map-Reduce Chain" },
          { title: "AI Code Reviewer", skills: "Prompt Engineering, GitHub API" },
          { title: "Medical Chatbot", skills: "Llama 3 Fine-tuning, PEFT" },
          { title: "Automated Blog Generator", skills: "Agents, SEO Optimization tools" }
        ]
      }
    ]
  }
];

export const OFFICIAL_CURRICULUM = [
  {
    module: 1,
    title: "Python Programming: Zero to Hero",
    icon: <Code className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    description: "The complete, end-to-end Python masterclass. From your first 'Hello World' to advanced metaprogramming and memory management.",
    topics: [
      "Week 1: Fundamentals - Installation, Syntax, Variables, Operators, Control Flow (if/else, loops)",
      "Week 2: Data Structures - Lists, Tuples, Dictionaries, Sets, Comprehensions, Functions & Modules",
      "Week 3: OOP Mastery - Classes, Objects, Inheritance, Polymorphism, Encapsulation, Error Handling",
      "Week 4: Advanced Python - Decorators, Generators, File I/O, Context Managers, Capstone Project"
    ],
    learningOutcomes: [
      "Build robust, modular command-line applications",
      "Understand low-level memory management in Python",
      "Implement advanced OOP design patterns",
      "Write clean, PEP-8 compliant production code"
    ],
    skills: ["Python 3", "Git", "VS Code", "Debugging", "Object-Oriented Design", "Algorithm Optimization"]
  },
  {
    module: 2,
    title: "Data Analysis & Engineering",
    icon: <BarChart className="w-6 h-6 text-white" />,
    color: "bg-emerald-600",
    description: "Transform raw data into actionable insights using the modern Python Data Stack.",
    topics: [
      "NumPy Computing: N-dimensional arrays, Broadcasting rules, Vectorization vs Loops, Indexing/Slicing, and Linear Algebra operations.",
      "Pandas Architecture: Series vs DataFrames, Index objects, Loading data (CSV, Excel, SQL, JSON), and Data Type conversion.",
      "Data Wrangling: Handling Missing Data (Imputation strategies), Removing Duplicates, String manipulation, and applying custom logic via .apply().",
      "Advanced Pandas: Multi-indexing (Hierarchical), Merging/Joining/Concatenating datasets, GroupBy (Split-Apply-Combine), and Pivot Tables/Crosstab.",
      "Time Series Analysis: DateOffset, Resampling, Shifting, Rolling windows, and Handling time zones.",
      "Data Visualization: Matplotlib anatomy (Figures, Axes), Line/Bar/Scatter plots, Seaborn statistical plots (Box, Violin, Heatmaps, PairPlots).",
      "Web Scraping Pipeline: HTTP requests, HTML parsing with BeautifulSoup, Handling Pagination, and Introduction to Selenium for dynamic content."
    ],
    learningOutcomes: [
      "Clean and preprocess messy real-world datasets",
      "Perform high-performance vector calculations",
      "Create publication-quality statistical visualizations",
      "Automate data collection from the web"
    ],
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Web Scraping", "Data Cleaning"]
  },
  {
    module: 3,
    title: "Advanced Statistics for Data Science",
    icon: <Calculator className="w-6 h-6 text-white" />,
    color: "bg-amber-600",
    description: "The mathematical backbone of Machine Learning and Analytics.",
    topics: [
      "Fundamentals: Population vs Sample, Types of Data (Nominal, Ordinal, Interval, Ratio), and Sampling Techniques (Stratified, Cluster, Random).",
      "Descriptive Statistics: Measures of Central Tendency (Mean, Median, Mode), Measures of Dispersion (Variance, Std Dev, Range, IQR), Skewness and Kurtosis.",
      "Probability Theory: Independent/Dependent events, Conditional Probability, Bayes' Theorem, and Random Variables.",
      "Probability Distributions: Discrete (Bernoulli, Binomial, Poisson) vs Continuous (Normal, Uniform, Exponential), PDF vs PMF vs CDF.",
      "Inferential Statistics: Central Limit Theorem (CLT), Confidence Intervals, Standard Error, and Margin of Error.",
      "Hypothesis Testing: Null vs Alternative Hypothesis, p-value interpretation, Type I vs Type II errors, Z-test, T-test (One/Two sample), ANOVA (F-test), and Chi-Square test."
    ],
    learningOutcomes: [
      "Formulate and test scientific hypotheses",
      "Understand probability distributions in data",
      "Make data-driven inferences with confidence intervals",
      "Detect statistical anomalies and biases"
    ],
    skills: ["Hypothesis Testing", "Probability Theory", "A/B Testing", "Statistical Inference", "ANOVA"]
  },
  {
    module: 4,
    title: "Database Architecture & Business Intelligence",
    icon: <Database className="w-6 h-6 text-white" />,
    color: "bg-indigo-600",
    description: "Manage enterprise data with SQL and build executive dashboards with Power BI.",
    topics: [
      "RDBMS Concepts: Entity Relationship Diagrams (ERD), Normalization (1NF, 2NF, 3NF), Primary vs Foreign Keys, and ACID properties.",
      "SQL Data Manipulation: SELECT statements, Filtering (WHERE/HAVING), Pattern matching (LIKE), and Sorting/Limiting results.",
      "Advanced SQL Joins: Inner, Left, Right, Full Outer Joins, Cross Joins, Self Joins, and UNION/UNION ALL operators.",
      "SQL Functions: Aggregate functions, String/Date/Math functions, and Window Functions (RANK, DENSE_RANK, ROW_NUMBER, LEAD/LAG).",
      "Advanced Database Objects: Subqueries (Correlated vs Scalar), Common Table Expressions (CTEs), Views, Stored Procedures, and Indexes.",
      "Power BI Foundations: Power Query Editor (ETL), Data Modeling (Star vs Snowflake Schema), and Relationship cardinality.",
      "DAX Mastery: Calculated Columns vs Measures, CALCULATE function, Time Intelligence functions (SAMEPERIODLASTYEAR, TOTALYTD), and Filter Context.",
      "Dashboard Design: Bookmarks, Drill-through filters, Tooltips, Custom Visuals, and Publishing to Power BI Service."
    ],
    learningOutcomes: [
      "Design normalized relational database schemas",
      "Write complex SQL queries for data extraction",
      "Build interactive Business Intelligence dashboards",
      "Model complex data relationships in Power BI"
    ],
    skills: ["SQL", "MySQL", "Power BI", "DAX", "Data Modeling", "ETL Pipelines"]
  },
  {
    module: 5,
    title: "Machine Learning: The Art of Prediction",
    icon: <Brain className="w-6 h-6 text-white" />,
    color: "bg-rose-600",
    description: "Build, evaluate, and deploy predictive models using Scikit-Learn.",
    topics: [
      "ML Foundations: Supervised vs Unsupervised vs Reinforcement Learning, Bias-Variance Tradeoff, Overfitting vs Underfitting, and Train-Test Split.",
      "Data Preprocessing Pipeline: Feature Scaling (MinMax, StandardScaler), Encoding Categorical Variables (One-Hot, Label, Target), and Pipeline objects.",
      "Regression Algorithms: Simple/Multiple Linear Regression, Polynomial Regression, Regularization (Lasso L1, Ridge L2, ElasticNet), and Gradient Descent intuition.",
      "Classification Algorithms: Logistic Regression (Sigmoid/Softmax), K-Nearest Neighbors (KNN), Support Vector Machines (SVM & Kernels), and Naive Bayes.",
      "Tree-Based Models: Decision Trees (Entropy, Gini Impurity), Random Forest (Bagging), AdaBoost, Gradient Boosting (GBM), and XGBoost.",
      "Unsupervised Learning: K-Means Clustering (Elbow Method), Hierarchical Clustering (Dendrograms), and DBSCAN.",
      "Dimensionality Reduction: Principal Component Analysis (PCA) math, t-SNE, and LDA (Linear Discriminant Analysis).",
      "Model Evaluation: Confusion Matrix, Accuracy, Precision, Recall, F1-Score, ROC-AUC Curve, R-Squared, RMSE, MAE, and Cross-Validation (K-Fold)."
    ],
    learningOutcomes: [
      "Build end-to-end ML training pipelines",
      "Optimize models using Hyperparameter tuning",
      "Evaluate model performance with precision",
      "Understand the math behind algorithms"
    ],
    skills: ["Scikit-Learn", "Model Tuning", "Feature Engineering", "Ensemble Methods", "Predictive Modeling"]
  },
  {
    module: 6,
    title: "Deep Learning & Neural Networks",
    icon: <Cpu className="w-6 h-6 text-white" />,
    color: "bg-violet-600",
    description: "Mimic the human brain to solve complex non-linear problems.",
    topics: [
      "Biological Inspiration: Biological Neurons vs Artificial Perceptrons, Weights, Biases, and the Universal Approximation Theorem.",
      "ANN Architecture: Multi-Layer Perceptrons (MLP), Input/Hidden/Output layers, and Forward Propagation.",
      "Training Mechanics: Loss Functions (MSE, Cross-Entropy), Backpropagation (Chain Rule calculus), and Gradient Descent variants (SGD, Mini-batch).",
      "Optimizers: Momentum, RMSprop, Adam, AdaGrad (Convergence speed & Stability).",
      "Activation Functions: Sigmoid, Tanh, ReLU (Rectified Linear Unit), Leaky ReLU, and Softmax.",
      "Regularization & Tuning: Dropout layers, Batch Normalization, L1/L2 regularization, Early Stopping callbacks, and Learning Rate Schedulers.",
      "TensorFlow & Keras: Computational graphs, Sequential vs Functional API, Model Checkpointing, and TensorBoard visualization."
    ],
    learningOutcomes: [
      "Design custom Neural Network architectures",
      "Implement Backpropagation and Optimizers",
      "Visualize training performance with TensorBoard",
      "Debug vanishing/exploding gradient problems"
    ],
    skills: ["TensorFlow", "Keras", "Neural Networks", "Deep Learning", "Optimization Algorithms"]
  },
  {
    module: 7,
    title: "Computer Vision: Teaching Machines to See",
    icon: <Eye className="w-6 h-6 text-white" />,
    color: "bg-cyan-600",
    description: "Process images and video streams for classification and detection.",
    topics: [
      "OpenCV Essentials: Reading/Writing images, Color Spaces (RGB, HSV, Grayscale), Resizing, Rotation, Affine Transformations.",
      "Image Processing: Thresholding, Blurring (Gaussian/Median), Edge Detection (Canny, Sobel), Morphological Operations, and Histogram Equalization.",
      "CNN Fundamentals: Convolution operation (Kernels/Filters), Padding (Valid vs Same), Stride, and Pooling layers (Max/Average).",
      "Modern Architectures: LeNet-5, AlexNet, VGG-16/19, ResNet (Skip Connections), Inception (GoogLeNet), and EfficientNet.",
      "Object Detection: R-CNN family basics, YOLO (You Only Look Once) architecture, Intersection over Union (IoU), and Non-Max Suppression.",
      "Transfer Learning: Loading pre-trained weights (ImageNet), Freezing layers, Fine-tuning top layers, and Data Augmentation strategies.",
      "Case Studies: Face Mask Detection, Real-time Emotion Recognition, and Vehicle Counting."
    ],
    learningOutcomes: [
      "Build real-time object detection systems",
      "Implement Transfer Learning on custom datasets",
      "Preprocess image data for neural networks",
      "Understand CNN architectures in depth"
    ],
    skills: ["OpenCV", "Computer Vision", "CNNs", "YOLO", "Image Processing", "Transfer Learning"]
  },
  {
    module: 8,
    title: "Natural Language Processing (NLP)",
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    color: "bg-teal-600",
    description: "Analyze and generate human language using classical and modern techniques.",
    topics: [
      "Text Cleaning: Lowercasing, Removing special characters, Contraction expansion, Spell correction.",
      "Preprocessing Pipeline: Tokenization (Word/Sentence), Stopword removal, Stemming (Porter/Snowball) vs Lemmatization (WordNet).",
      "Feature Extraction: Bag of Words (BoW), TF-IDF (Term Frequency-Inverse Document Frequency), and N-Grams.",
      "Word Embeddings: Word2Vec (Skip-gram vs CBOW), GloVe (Global Vectors), FastText, and Semantic Similarity (Cosine Similarity).",
      "Sequence Models: Recurrent Neural Networks (RNN), Vanishing Gradient problem, LSTMs (Gates architecture), GRUs, and Bi-Directional RNNs.",
      "Sequence-to-Sequence: Encoder-Decoder architecture, Attention Mechanism intuition, and Beam Search decoding."
    ],
    learningOutcomes: [
      "Build Sentiment Analysis models",
      "Create Chatbots using Sequence models",
      "Understand word vector semantics",
      "Implement text preprocessing pipelines"
    ],
    skills: ["NLTK", "Spacy", "RNN/LSTM", "Word Embeddings", "Text Analytics", "Sentiment Analysis"]
  },
  {
    module: 9,
    title: "Generative AI & LLMs",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    color: "bg-fuchsia-600",
    description: "Build the future with Large Language Models and Generative AI applications.",
    topics: [
      "Transformer Architecture: Self-Attention mechanism (Query, Key, Value), Multi-head attention, Positional Encoding, and Layer Norm.",
      "LLM Landscape: GPT series (Decoder-only), BERT (Encoder-only), T5 (Encoder-Decoder), and parameter counts (7B vs 70B).",
      "Prompt Engineering: Zero-shot/Few-shot learning, Chain of Thought (CoT), ReAct framework, and System instructions.",
      "API Integration: OpenAI API (ChatCompletions, DALL-E 3), Google Gemini API (Multimodal inputs), and Rate limit handling.",
      "LangChain Framework: Chains, Agents, Memory modules, Document Loaders, and Prompt Templates.",
      "RAG (Retrieval Augmented Generation): Vector Databases (Pinecone, ChromaDB, FAISS), Embeddings generation, and Semantic Search.",
      "Fine-Tuning: PEFT (Parameter-Efficient Fine-Tuning), LoRA (Low-Rank Adaptation), QLoRA (Quantized LoRA), and RLHF (Reinforcement Learning from Human Feedback)."
    ],
    learningOutcomes: [
      "Build RAG-based Knowledge Base Chatbots",
      "Fine-tune LLMs for specific domains",
      "Master Prompt Engineering techniques",
      "Integrate GenAI APIs into web apps"
    ],
    skills: ["Transformers", "LLMs", "LangChain", "OpenAI API", "Gemini API", "Vector Databases", "RAG"]
  }
];
