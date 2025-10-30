
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-luxury-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-platinum-200 max-w-3xl mx-auto animate-fade-in">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-platinum-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="luxury-card animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-navy-900">Data Pirates Agency Terms of Service</CardTitle>
                <p className="text-platinum-600">Effective Date: January 1, 2023</p>
              </CardHeader>
              <CardContent className="space-y-8 text-platinum-700">
                
                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">1. Introduction</h2>
                  <p>Welcome to Data Pirates Agency. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please refrain from using our services.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">2. Services Provided</h2>
                  <p>Data Pirates Agency offers a broad range of services, including but not limited to:</p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="font-semibold text-navy-900">Software Development:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Custom Software Solutions</li>
                        <li>Web Application Development</li>
                        <li>Mobile Application Development</li>
                        <li>Cloud-Based Solutions</li>
                        <li>E-commerce Development</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Database Development:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Database Design and Architecture</li>
                        <li>Database Management Systems (DBMS) Implementation</li>
                        <li>Database Optimization and Performance Tuning</li>
                        <li>Data Migration and Integration</li>
                        <li>Database Backup and Recovery</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">System Integration:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>API Development and Integration</li>
                        <li>Third-Party Software Integration</li>
                        <li>System Architecture Design</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Consulting Services:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>IT Strategy and Planning</li>
                        <li>Technology Assessment</li>
                        <li>Project Management</li>
                        <li>Software Architecture Consulting</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Support and Maintenance:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Bug Fixing and Troubleshooting</li>
                        <li>Performance Optimization</li>
                        <li>Upgrade and Maintenance</li>
                        <li>Security Patches and Updates</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Healthcare Solutions:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Healthcare Software Development</li>
                        <li>Medical Data Management</li>
                        <li>Compliance Assurance</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Business Solutions:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Business Management Systems</li>
                        <li>CRM and ERP Solutions</li>
                        <li>Workflow Automation</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900">Other Services:</h3>
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Technical Support</li>
                        <li>Training and Documentation</li>
                        <li>Custom Software Enhancements</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">3. User Responsibilities</h2>
                  <p>You agree to:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Provide accurate and complete information when using our services.</li>
                    <li>Use our services in compliance with applicable laws and regulations.</li>
                    <li>Not engage in any activity that could damage, disable, or impair our services.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">4. Payment Terms</h2>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Payments are due as specified in the invoice or agreement.</li>
                    <li>Late payments may incur additional charges or interest as specified.</li>
                    <li>We reserve the right to suspend or terminate services for non-payment.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">5. Cancellation and Refund Policy</h2>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Once a project or service agreement has been initiated, cancellations by the client will not be eligible for a refund. This includes any advance payments or deposits made.</li>
                    <li>If you wish to cancel the project or service, please notify us as soon as possible. However, we are not obligated to provide any refunds for services that have been partially or fully rendered.</li>
                    <li>Refunds may be considered only at our discretion in exceptional circumstances, subject to a review of the case.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">6. Confidentiality</h2>
                  <p>We will not disclose any confidential information provided by you to third parties without your consent, except as required by law.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">7. Intellectual Property</h2>
                  <p>All content, trademarks, and other intellectual property related to our services are the property of Data Pirates Agency. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">8. Limitation of Liability</h2>
                  <p>Our liability for any claim arising from or related to our services is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">9. Termination</h2>
                  <p>We reserve the right to terminate or suspend our services at any time, with or without cause. You may terminate your use of our services by providing us with written notice.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">10. Changes to Terms</h2>
                  <p>We may update these Terms of Service from time to time. The updated Terms will be posted on our website, and your continued use of our services constitutes acceptance of the updated Terms.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">11. Governing Law</h2>
                  <p>These Terms of Service are governed by and construed by the laws of South Korea. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in South Korea.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-navy-900 mb-3">12. Contact Information</h2>
                  <p>If you have any questions about these Terms of Service, please contact us.</p>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
