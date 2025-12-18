import React from 'react';
import { Handshake } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Endoscopic Surgeon Action Detection',
    description: 'A novel approach using STN and EfficientNet-B2 with FPN for minimally invasive surgery. The system detects and classifies surgical actions in real-time, assisting in surgical training and quality assessment.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
    techStack: ['STN', 'EfficientNet-B2', 'FPN', 'Medical AI'],
    difficulty: 'Hard',
  },
  {
    id: '2',
    title: 'Kidney Tumor Detection',
    description: 'Advanced imaging and ML system for accurate kidney tumor detection and classification. Analyzes CT scans to identify tumors early, enabling timely medical intervention and improved patient outcomes.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80',
    techStack: ['CNN', 'CT Analysis', 'Classification', 'Healthcare'],
    difficulty: 'Hard',
  },
  {
    id: '3',
    title: 'PDF Chatbot',
    description: 'Intelligent system for enhanced interaction with PDF documents using BERT and PSO. Users can query documents naturally and receive accurate, contextual answers extracted from the content.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    techStack: ['BERT', 'PSO', 'Document AI', 'Chatbot'],
    difficulty: 'Medium',
  },
  {
    id: '4',
    title: 'Deep Fake Image Detection',
    description: 'Uses InceptionResNetV2 and EfficientNet to detect digitally manipulated images. Identifies subtle artifacts that reveal image manipulation, combating misinformation and ensuring digital media integrity.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    techStack: ['InceptionResNetV2', 'EfficientNet', 'Image Forensics'],
    difficulty: 'Hard',
  },
  {
    id: '5',
    title: 'Emotion Detection through Facial Expression and Voice',
    description: 'Combines deep learning for facial expressions and LSTM networks for voice emotion analysis. Captures video frames and audio simultaneously to provide comprehensive and precise emotion detection.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    techStack: ['CNN', 'LSTM', 'Facial Recognition', 'Audio Analysis'],
    difficulty: 'Hard',
  },
  {
    id: '6',
    title: 'Human vs Bot Text Detection on Twitter',
    description: 'Leverages BERT, CNN, and LSTM to distinguish between human-written and bot-generated tweets. Analyzes text features to classify tweet origin, helping combat automated misinformation on social media.',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80',
    techStack: ['BERT', 'CNN', 'LSTM', 'Text Classification'],
    difficulty: 'Hard',
  },
  {
    id: '7',
    title: 'Image Captioning',
    description: 'Generates accurate and meaningful textual descriptions using EfficientNet for image classification and BERT for generating coherent captions. Applicable to digital media, accessibility, and content generation.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&q=80',
    techStack: ['EfficientNet', 'BERT', 'Image-to-Text', 'Accessibility'],
    difficulty: 'Medium',
  },
  {
    id: '8',
    title: 'Plant Leaf Disease Detection and Care',
    description: 'Uses MobileNet for identifying plant diseases through image recognition. Provides detailed care instructions to help farmers and gardeners mitigate detected conditions and promote healthier plants.',
    image: 'https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=800&q=80',
    techStack: ['MobileNet', 'Image Classification', 'Edge Computing'],
    difficulty: 'Medium',
  },
  {
    id: '9',
    title: 'Skin Lesion Recognition with Federated Learning',
    description: 'Detects skin lesions using EfficientNet while maintaining data privacy through federated learning. Leverages decentralized data without transferring sensitive medical information to central servers.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    techStack: ['EfficientNet', 'Federated Learning', 'Privacy-Preserving ML'],
    difficulty: 'Hard',
  },
  {
    id: '10',
    title: 'Restaurant Reviews Prediction',
    description: 'Predicts star ratings from restaurant reviews using BERT. Captures nuances and sentiments in text to accurately predict ratings, helping restaurant owners understand customer feedback and improve service.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    techStack: ['BERT', 'Sentiment Analysis', 'Rating Prediction'],
    difficulty: 'Medium',
  },
  {
    id: '11',
    title: 'Knee Osteoarthritis Detection',
    description: 'Uses MobileNet to analyze medical images for early detection of knee osteoarthritis. Identifies presence and severity of the condition, providing valuable diagnostic support for healthcare professionals.',
    image: 'https://images.unsplash.com/photo-1597764690523-15bea4c581c9?w=800&q=80',
    techStack: ['MobileNet', 'X-ray Analysis', 'Edge Deployment'],
    difficulty: 'Medium',
  },
  {
    id: '12',
    title: 'Early Detection of Alzheimer\'s Disease',
    description: 'Employs Swin Transformer to analyze brain imaging data for early signs of Alzheimer\'s. The hierarchical vision transformer captures intricate patterns, enhancing diagnostic accuracy for this progressive neurological disorder.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
    techStack: ['Swin Transformer', 'Brain Imaging', 'Early Diagnosis'],
    difficulty: 'Hard',
  },
  {
    id: '13',
    title: 'GuardianAI: Cyber Bullying Detection',
    description: 'Addresses online harassment using Random Forest, SVM, and Decision Tree algorithms. Analyzes text to identify cyber bullying patterns, empowering platforms to take proactive measures for safer online spaces.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    techStack: ['Random Forest', 'SVM', 'Decision Tree', 'Text Analysis'],
    difficulty: 'Medium',
  },
  {
    id: '14',
    title: 'Visionary Dermatology: Skin Lesion Classification',
    description: 'Revolutionizes dermatological diagnostics using Vision Transformer models. Accurately classifies diverse skin lesions from harmless moles to potential malignancies, enabling precise and timely identification.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    techStack: ['ViT', 'Image Classification', 'Medical Diagnostics'],
    difficulty: 'Hard',
  },
  {
    id: '15',
    title: 'EfficientNet-ViT Fusion for Leukemia Detection',
    description: 'Fuses EfficientNet and Vision Transformer for enhanced leukemia detection from blood images. Distinguishes healthy and leukemic cells with high accuracy, facilitating timely interventions in clinical settings.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    techStack: ['EfficientNet', 'ViT', 'Blood Analysis', 'Cancer Detection'],
    difficulty: 'Hard',
  },
  {
    id: '16',
    title: 'Brain Tumor Detection using ResNet',
    description: 'Leverages ResNet\'s deep learning architecture to analyze MRI scans and identify brain tumor regions. Distinguishes between healthy brain tissue and tumor-afflicted regions with high precision for enhanced diagnostic accuracy.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80',
    techStack: ['ResNet', 'MRI Analysis', 'CNN', 'Medical AI'],
    difficulty: 'Hard',
  },
  {
    id: '17',
    title: 'Chest X-ray Analysis with CNN',
    description: 'Uses Convolutional Neural Networks to analyze chest X-ray images for medical diagnosis. Detects conditions like pneumonia, tuberculosis, and lung cancer, offering clinicians valuable insights for patient care.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
    techStack: ['CNN', 'X-ray Analysis', 'Pulmonary Care', 'Diagnostics'],
    difficulty: 'Medium',
  },
  {
    id: '18',
    title: 'TGRTC Bus Arrival Prediction',
    description: 'Predicts student arrival times using RTC bus data with SVM, Decision Trees, and Naive Bayes. Analyzes schedules, routes, weather, and traffic patterns to help students optimize their daily commute.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    techStack: ['SVM', 'Decision Trees', 'Naive Bayes', 'Predictive Analytics'],
    difficulty: 'Medium',
  },
  {
    id: '19',
    title: 'Credit Card Fraud Detection',
    description: 'Detects fraudulent credit card transactions using machine learning algorithms. Analyzes transaction patterns, user behavior, and anomalies to identify suspicious activities in real-time, protecting users from financial fraud.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    techStack: ['Random Forest', 'XGBoost', 'Anomaly Detection', 'FinTech'],
    difficulty: 'Medium',
  },
  {
    id: '20',
    title: 'Sentiment Analysis on Tweets',
    description: 'Analyzes Twitter data to determine sentiment polarity of tweets. Uses NLP techniques to classify tweets as positive, negative, or neutral, providing insights for brand monitoring and public opinion analysis.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    techStack: ['NLP', 'NLTK', 'TextBlob', 'Social Media Analytics'],
    difficulty: 'Easy',
  },
  {
    id: '21',
    title: 'Handwritten Digit Recognition',
    description: 'Recognizes handwritten digits using Convolutional Neural Networks trained on MNIST dataset. Achieves high accuracy in digit classification, applicable to postal mail sorting, bank check processing, and digitization.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80',
    techStack: ['CNN', 'MNIST', 'TensorFlow', 'Image Recognition'],
    difficulty: 'Easy',
  },
  {
    id: '22',
    title: 'Sales Forecasting System',
    description: 'Predicts future sales trends using time series analysis and machine learning models. Helps businesses optimize inventory management, resource allocation, and strategic planning through accurate demand forecasting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    techStack: ['Time Series', 'ARIMA', 'Prophet', 'Business Intelligence'],
    difficulty: 'Easy',
  },
  {
    id: '23',
    title: 'News Article Category Classifier',
    description: 'Automatically categorizes news articles into predefined categories using NLP and text classification. Streamlines content organization for news platforms, enabling efficient content discovery and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    techStack: ['NLP', 'TF-IDF', 'Naive Bayes', 'Text Classification'],
    difficulty: 'Easy',
  },
  {
    id: '24',
    title: 'Chatbot using Transformers (BERT / GPT)',
    description: 'Intelligent conversational AI powered by transformer architectures like BERT and GPT. Understands context, generates human-like responses, and handles complex queries for customer support, virtual assistance, and interactive applications.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    techStack: ['BERT', 'GPT', 'Transformers', 'Conversational AI'],
    difficulty: 'Hard',
  },
  {
    id: '25',
    title: 'Fake News Detection using NLP',
    description: 'Identifies and flags fake news articles using natural language processing techniques. Analyzes linguistic patterns, source credibility, and content authenticity to combat misinformation and promote media literacy.',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&q=80',
    techStack: ['NLP', 'BERT', 'Text Classification', 'Fact Checking'],
    difficulty: 'Medium',
  },
  {
    id: '26',
    title: 'Recommendation System using Deep Learning',
    description: 'Personalized recommendation engine using deep learning and collaborative filtering. Analyzes user preferences and behavior patterns to suggest relevant products, content, or services, enhancing user engagement and satisfaction.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    techStack: ['Deep Learning', 'Collaborative Filtering', 'Neural Networks', 'Personalization'],
    difficulty: 'Medium',
  },
  {
    id: '27',
    title: 'House Price Prediction',
    description: 'Predicts real estate prices using regression models like Linear Regression and Random Forest. Analyzes features such as location, size, amenities, and market trends to provide accurate property valuations for buyers and sellers.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    techStack: ['Linear Regression', 'Random Forest', 'Feature Engineering', 'Real Estate'],
    difficulty: 'Easy',
  },
  {
    id: '28',
    title: 'Spam Email Classifier',
    description: 'Automatically detects and filters spam emails using Naive Bayes and Logistic Regression algorithms. Analyzes email content, sender patterns, and metadata to protect users from unwanted and potentially harmful messages.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80',
    techStack: ['Naive Bayes', 'Logistic Regression', 'NLP', 'Email Security'],
    difficulty: 'Easy',
  },
  {
    id: '29',
    title: 'Movie Recommendation System',
    description: 'Suggests personalized movie recommendations using collaborative filtering techniques. Analyzes user ratings, viewing history, and preferences to discover films that match individual tastes and enhance entertainment experience.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    techStack: ['Collaborative Filtering', 'Matrix Factorization', 'Cosine Similarity', 'RecSys'],
    difficulty: 'Easy',
  },
  {
    id: '30',
    title: 'Iris Flower Classification',
    description: 'Classic supervised machine learning project classifying iris flowers into species based on petal and sepal measurements. Demonstrates fundamental ML concepts including data preprocessing, model training, and evaluation.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    techStack: ['SVM', 'KNN', 'Decision Trees', 'Scikit-learn'],
    difficulty: 'Easy',
  },
  {
    id: '31',
    title: 'Customer Churn Prediction',
    description: 'Predicts customer churn probability using binary classification models. Helps businesses identify at-risk customers and implement retention strategies by analyzing usage patterns, satisfaction scores, and engagement metrics.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    techStack: ['Binary Classification', 'XGBoost', 'Feature Engineering', 'Business Analytics'],
    difficulty: 'Easy',
  },
  {
    id: '32',
    title: 'Stock Price Trend Prediction',
    description: 'Forecasts stock price movements using time series analysis and regression techniques. Analyzes historical price data, trading volumes, and market indicators to assist investors in making informed trading decisions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    techStack: ['Time Series', 'LSTM', 'Regression', 'Financial Analytics'],
    difficulty: 'Medium',
  },
  {
    id: '33',
    title: 'Speech Emotion Recognition',
    description: 'Detects emotions from speech audio using deep learning models. Analyzes vocal patterns, pitch, tone, and speech rhythm to identify emotional states, enabling applications in mental health, customer service, and human-computer interaction.',
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80',
    techStack: ['CNN', 'MFCC', 'Audio Processing', 'Emotion AI'],
    difficulty: 'Medium',
  },
  {
    id: '34',
    title: 'Human Activity Recognition',
    description: 'Recognizes human activities from sensor data using machine learning. Classifies movements like walking, running, and sitting from accelerometer and gyroscope data, applicable to fitness tracking and health monitoring systems.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    techStack: ['LSTM', 'CNN', 'Sensor Data', 'Wearable Tech'],
    difficulty: 'Medium',
  },
  {
    id: '35',
    title: 'Cold Email Generator',
    description: 'Generates personalized cold emails using AI and natural language generation. Creates compelling, contextually relevant outreach messages tailored to recipients, improving response rates for sales and business development teams.',
    image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80',
    techStack: ['GPT', 'NLG', 'Prompt Engineering', 'Sales Automation'],
    difficulty: 'Hard',
  },
  {
    id: '36',
    title: 'Knowledge-Base Chatbot',
    description: 'Enterprise chatbot that answers queries from company data and internal knowledge bases. Enables employees and customers to quickly find information from documents, policies, and databases through natural conversation.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    techStack: ['RAG', 'LangChain', 'Vector DB', 'Enterprise AI'],
    difficulty: 'Hard',
  },
  {
    id: '37',
    title: 'Research Paper Assistant',
    description: 'AI assistant that answers questions across multiple research papers. Helps researchers and students quickly find relevant information, summarize findings, and discover connections between academic publications.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    techStack: ['RAG', 'Semantic Search', 'PDF Parsing', 'Academic AI'],
    difficulty: 'Hard',
  },
  {
    id: '38',
    title: 'AI Tutor',
    description: 'Intelligent tutoring system that answers questions strictly from textbooks and course materials. Provides accurate, curriculum-aligned explanations to help students learn concepts effectively while avoiding misinformation.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    techStack: ['RAG', 'LLM', 'Educational AI', 'Content Grounding'],
    difficulty: 'Hard',
  },
  {
    id: '39',
    title: 'Customer Support AI',
    description: 'AI-powered customer support system using internal FAQs and LLM capabilities. Resolves customer queries instantly by referencing company knowledge base, reducing response time and improving customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
    techStack: ['LLM', 'RAG', 'FAQ Integration', 'Customer Experience'],
    difficulty: 'Hard',
  },
  {
    id: '40',
    title: 'AI Task Planner Agent',
    description: 'Autonomous AI agent that breaks complex goals into actionable steps and executes them systematically. Uses planning algorithms and tool integration to accomplish multi-step tasks with minimal human intervention.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    techStack: ['AI Agents', 'LangChain', 'Task Decomposition', 'Autonomous AI'],
    difficulty: 'Hard',
  },
  {
    id: '41',
    title: 'Web Research Agent',
    description: 'Automated research agent that searches the web, summarizes findings, and generates comprehensive reports. Streamlines information gathering by autonomously exploring multiple sources and synthesizing insights.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    techStack: ['Web Scraping', 'LLM', 'Auto-GPT', 'Information Retrieval'],
    difficulty: 'Hard',
  },
  {
    id: '42',
    title: 'Fine-Tuned LLM',
    description: 'Domain-specific language model fine-tuned on specialized datasets. Adapts pre-trained models to specific industries or use cases, achieving superior performance on targeted tasks while maintaining efficiency.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
    techStack: ['Fine-Tuning', 'LoRA', 'PEFT', 'Domain Adaptation'],
    difficulty: 'Hard',
  },
];

interface ProjectsProps {
  onViewCourses?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewCourses }) => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-500/20 text-orange-300 border border-orange-400/30 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
            Research & Development
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-stone-300 max-w-3xl mx-auto">
            Innovative machine learning and artificial intelligence solutions designed to solve complex real-world problems across diverse industries and domains.
          </p>
        </div>
      </section>

      {/* Collaborator Section */}
      <section className="py-8 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Handshake className="w-6 h-6 text-orange-400" />
            <span className="text-stone-300 font-medium">In Collaboration With</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-5 rounded-2xl border border-white/20 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3">
              <h3 className="text-2xl md:text-3xl font-bold text-white">AICraftAlchemy</h3>
              <span className="hidden sm:block text-stone-400">|</span>
              <p className="text-stone-300"><span className="text-orange-400 font-semibold">E.Lokesh</span> - Founder & CEO</p>
            </div>
            <p className="text-orange-400 font-semibold text-sm mb-2">Pioneering AI Solutions</p>
            <p className="text-stone-400 text-sm max-w-3xl mx-auto leading-relaxed">
              Transforming raw data into golden insights. Expert alchemists specializing in AI, Machine Learning, and Deep Learning — transmuting complex data into valuable knowledge, empowering businesses to drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 group"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {/* Difficulty Badge */}
                  <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                    project.difficulty === 'Easy'
                      ? 'bg-green-500 text-white'
                      : project.difficulty === 'Medium'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-red-500 text-white'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Build Similar Projects?</h2>
          <p className="text-stone-300 mb-8">
            Join our courses and learn to create real-world AI & ML applications with expert guidance.
          </p>
          <button
            onClick={onViewCourses}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/25 transition-all inline-block cursor-pointer"
          >
            Explore Courses
          </button>
        </div>
      </section>
    </div>
  );
};
