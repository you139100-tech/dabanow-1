// Référence API Velo : https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Écrivez votre code JavaScript ici en utilisant l'API du framework Velo

	// Affichez « Hello World » :
	// console.log("Hello world!");

	// Appelez des fonctions sur des éléments de la page. Par exemple :
	// $w("#button1").label = « Cliquez‑moi ! »;

	// Cliquez sur « Tester » ou accédez à l'aperçu de votre site pour exécuter votre code

});
var html =  '<!DOCTYPE html>'+
'<html lang="fr">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'    <title>Inscription - BDANOW</title>'+
'    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">'+
'    <style>'+
'        /* ==================== STYLES SPECIFIQUES INSCRIPTION ==================== */'+
'        * { margin: 0; padding: 0; box-sizing: border-box; font-family: \'Segoe UI\', sans-serif; }'+
'        '+
'        body {'+
'            background-color: #f4f7f6;'+
'            height: 100vh;'+
'            display: flex;'+
'            justify-content: center;'+
'            align-items: center;'+
'        }'+
''+
'        .auth-container {'+
'            display: flex;'+
'            width: 90%;'+
'            max-width: 1100px;'+
'            height: 85vh; /* باش تجي شادة الفورمة */'+
'            background: white;'+
'            border-radius: 20px;'+
'            overflow: hidden;'+
'            box-shadow: 0 20px 50px rgba(0,0,0,0.1);'+
'        }'+
''+
'        /* --- LEFT SIDE (الجهة اليسرى - الزرقاء) --- */'+
'        .auth-left {'+
'            flex: 1;'+
'            background: linear-gradient(135deg, #011C40 0%, #1E2E4F 100%); /* LUNA Dark Blue */'+
'            color: white;'+
'            padding: 50px;'+
'            display: flex;'+
'            flex-direction: column;'+
'            justify-content: space-between;'+
'            position: relative;'+
'        }'+
''+
'        .auth-logo {'+
'            display: flex;'+
'            align-items: center;'+
'            gap: 15px;'+
'        }'+
'        .auth-logo img { height: 60px; background: white; border-radius: 50%; padding: 5px; }'+
'        .auth-logo h2 { font-size: 1.5rem; font-weight: bold; }'+
''+
'        .auth-left-content h1 { font-size: 2.5rem; margin-bottom: 30px; line-height: 1.2; }'+
'        '+
'        .feature-list { list-style: none; }'+
'        .feature-list li { display: flex; gap: 15px; margin-bottom: 25px; }'+
'        .feature-icon { '+
'            width: 40px; height: 40px; '+
'            background: rgba(255,255,255,0.1); '+
'            border-radius: 50%; '+
'            display: flex; align-items: center; justify-content: center;'+
'            flex-shrink: 0;'+
'        }'+
'        .feature-text h4 { font-size: 1.1rem; margin-bottom: 5px; color: #54ACBF; /* Cyan highlight */ }'+
'        .feature-text p { font-size: 0.9rem; opacity: 0.8; line-height: 1.4; }'+
''+
'        .testimonial {'+
'            background: rgba(255,255,255,0.1);'+
'            padding: 20px;'+
'            border-radius: 15px;'+
'            font-size: 0.9rem;'+
'            font-style: italic;'+
'            border-left: 4px solid #54ACBF;'+
'        }'+
''+
'        /* --- RIGHT SIDE (الجهة اليمنى - الفورم) --- */'+
'        .auth-right {'+
'            flex: 1.2; /* عريضة شوية على اليسرى */'+
'            background: white;'+
'            padding: 50px;'+
'            overflow-y: auto; /* باش إلا كانت الشاشة صغيرة نقدر نهبطو */'+
'        }'+
''+
'        .auth-header { text-align: center; margin-bottom: 30px; }'+
'        .auth-header h2 { font-size: 2rem; color: #011C40; margin-bottom: 10px; }'+
'        .auth-header p { color: #666; }'+
''+
'        /* Tabs (Connexion / Inscription) */'+
'        .auth-tabs {'+
'            display: flex;'+
'            justify-content: center;'+
'            gap: 40px;'+
'            margin-bottom: 30px;'+
'            border-bottom: 2px solid #eee;'+
'        }'+
'        .auth-tab {'+
'            padding-bottom: 10px;'+
'            font-weight: 600;'+
'            color: #999;'+
'            text-decoration: none;'+
'            cursor: pointer;'+
'            font-size: 1.1rem;'+
'        }'+
'        .auth-tab.active {'+
'            color: #011C40;'+
'            border-bottom: 3px solid #011C40;'+
'        }'+
''+
'        /* Form */'+
'        .form-group { margin-bottom: 20px; }'+
'        .form-group label { display: block; margin-bottom: 8px; font-weight: 600; color: #333; font-size: 0.9rem; }'+
'        .form-group input {'+
'            width: 100%;'+
'            padding: 14px;'+
'            border: 1px solid #ddd;'+
'            border-radius: 10px;'+
'            outline: none;'+
'            transition: 0.3s;'+
'            font-size: 1rem;'+
'        }'+
'        .form-group input:focus { border-color: #54ACBF; box-shadow: 0 0 0 4px rgba(84, 172, 191, 0.1); }'+
''+
'        .btn-submit {'+
'            width: 100%;'+
'            padding: 15px;'+
'            background: linear-gradient(135deg, #011C40 0%, #31487A 100%);'+
'            color: white;'+
'            border: none;'+
'            border-radius: 10px;'+
'            font-size: 1.1rem;'+
'            font-weight: bold;'+
'            cursor: pointer;'+
'            transition: 0.3s;'+
'            margin-top: 10px;'+
'        }'+
'        .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(1, 28, 64, 0.2); }'+
''+
'        /* Mobile */'+
'        @media (max-width: 900px) {'+
'            .auth-container { flex-direction: column; height: auto; margin: 20px 0; }'+
'            .auth-left { display: none; } /* نخبيو الجهة اليسرى فالموبايل باش ماطوالش الصفحة */'+
'            .auth-right { padding: 30px; }'+
'        }'+
'    </style>'+
'</head>'+
'<body>'+
''+
'    <div class="auth-container">'+
'        <div class="auth-left">'+
'            <div>'+
'                <div class="auth-logo">'+
'                    <img src="Smart.png" alt="Logo">'+
'                    <h2>BDANOW</h2>'+
'                </div>'+
'                <div class="auth-left-content" style="margin-top: 40px;">'+
'                    <h1>Transformez votre avenir professionnel</h1>'+
'                    '+
'                    <ul class="feature-list">'+
'                        <li>'+
'                            <div class="feature-icon"><i class="fas fa-certificate"></i></div>'+
'                            <div class="feature-text">'+
'                                <h4>Formations certifiantes</h4>'+
'                                <p>Accédez à des programmes reconnus pour booster votre employabilité.</p>'+
'                            </div>'+
'                        </li>'+
'                        <li>'+
'                            <div class="feature-icon"><i class="fas fa-briefcase"></i></div>'+
'                            <div class="feature-text">'+
'                                <h4>Opportunités professionnelles</h4>'+
'                                <p>Connectez-vous avec des employeurs à la recherche de vos compétences.</p>'+
'                            </div>'+
'                        </li>'+
'                        <li>'+
'                            <div class="feature-icon"><i class="fas fa-users"></i></div>'+
'                            <div class="feature-text">'+
'                                <h4>Communauté engagée</h4>'+
'                                <p>Rejoignez des milliers de professionnels en reconversion digitale.</p>'+
'                            </div>'+
'                        </li>'+
'                    </ul>'+
'                </div>'+
'            </div>'+
''+
'            <div class="testimonial">'+
'                "BDANOW a transformé ma carrière. En 6 mois, j\'ai acquis des compétences qui m\'ont permis de décrocher un poste." '+
'                <br><br><strong>— Mohamed L., Développeur</strong>'+
'            </div>'+
'        </div>'+
''+
'        <div class="auth-right">'+
'            <div class="auth-header">'+
'                <h2>Créez votre compte</h2>'+
'                <p>Rejoignez BDANOW pour démarrer votre réussite.</p>'+
'            </div>'+
''+
'            <div class="auth-tabs">'+
'                <a href="login.html" class="auth-tab">Connexion</a>'+
'                <a href="#" class="auth-tab active">Inscription</a>'+
'            </div>'+
''+
'            <form action="dashboard.html">'+
'                <div class="form-group">'+
'                    <label>Nom et Prénom</label>'+
'                    <input type="text" placeholder="Entrez votre nom complet">'+
'                </div>'+
''+
'                <div class="form-group">'+
'                    <label>Adresse email</label>'+
'                    <input type="email" placeholder="votre@email.com">'+
'                </div>'+
''+
'                <div class="form-group">'+
'                    <label>Numéro de téléphone</label>'+
'                    <input type="tel" placeholder="+212 6 00 00 00 00">'+
'                </div>'+
''+
'                <div class="form-group">'+
'                    <label>Mot de passe</label>'+
'                    <input type="password" placeholder="••••••••">'+
'                </div>'+
''+
'                <div class="form-group">'+
'                    <label>Confirmation du mot de passe</label>'+
'                    <input type="password" placeholder="••••••••">'+
'                </div>'+
''+
'                <button type="submit" class="btn-submit">S\'inscrire maintenant</button>'+
'            </form>'+
'            '+
'            <p style="text-align: center; margin-top: 20px; font-size: 0.9rem;">'+
'                <a href="index.html" style="color: #666; text-decoration: none;">← Retour à l\'accueil</a>'+
'            </p>'+
'        </div>'+
'    </div>'+
''+
'</body>'+
'</html>';