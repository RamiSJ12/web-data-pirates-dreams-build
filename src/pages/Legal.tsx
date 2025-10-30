
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Legal = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Legal Disclaimers
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            Important legal information regarding the use of our services and website.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Data Pirates Agency Legal Disclaimers</CardTitle>
                <p className="text-platinum-600">Effective Date: January 1, 2023</p>
              </CardHeader>
              <CardContent className="space-y-8 text-platinum-700">
                
                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">1. General Information</h2>
                  <p>The information provided by Data Pirates Agency on our website and through our services is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no warranties or representations regarding the accuracy, completeness, or reliability of any information provided. The use of any information provided is solely at your own risk.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">2. Professional Advice</h2>
                  <p>The content on our website and the services we provide do not constitute professional advice. You should not rely on the information as a substitute for professional advice from a qualified expert. For specific advice related to your circumstances, please consult with a professional in the relevant field.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">3. Limitation of Liability</h2>
                  <p>To the fullest extent permitted by law, Data Pirates Agency, its affiliates, and their respective officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from or arising out of your use of our website or services.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">4. No Warranty</h2>
                  <p>Our website and services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that our website or services will be uninterrupted, secure, or error-free.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">5. External Links</h2>
                  <p>Our website may contain links to third-party websites that are not owned or controlled by Data Pirates Agency. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. By using our website, you acknowledge and agree that Data Pirates Agency shall not be responsible or liable for any damage or loss caused by or in connection with your use of any third-party websites.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">6. Indemnification</h2>
                  <p>You agree to indemnify, defend, and hold harmless Data Pirates Agency, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees, arising out of or related to your use of our website or services, your violation of these Terms of Service, or your infringement of any intellectual property or other rights of any person or entity.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">7. Changes to Disclaimers</h2>
                  <p>We may update these Legal Disclaimers from time to time. The updated Disclaimers will be posted on our website, and your continued use of our website and services constitutes acceptance of the updated Disclaimers.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">8. Governing Law</h2>
                  <p>These Legal Disclaimers are governed by and construed in accordance with the laws of South Korea. Any disputes arising from these Disclaimers will be subject to the exclusive jurisdiction of the courts in South Korea.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">9. Contact Information</h2>
                  <p>If you have any questions about these Legal Disclaimers, please contact us.</p>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;
